import React, {ReactNode, useEffect, useState} from 'react'

import NeedLogin from '$components/event/NeedLogin'
import Waiting from '$components/event/Waiting'
import Participation from '$components/event/Participation'

import useKakaoLogin from '$hooks/useKakaoLogin'
import {EventResponse, useParticipateEvent} from '$api/event'
import {useParams} from 'react-router-dom'
// import useAuthToken from '$hooks/useAuthToken'
import InvalidCode from '$components/event/InvalidCode'
import Canceled from '$components/event/Canceled'
// import {useCallback} from 'react'
// import useAsyncError from '$hooks/useAsyncError'
// import {RESULT_CODE} from '$util/client'
import {AlreadyJoinedError, NonTargetError, OutofPeriodError} from '$util/FetchError'
import {ParticipatedNotice} from './EventResult'
import NonTarget from '$components/event/NonTarget'
import Finished from '$components/event/Finished'
import { Helmet } from 'react-helmet'
import { originUrl } from '$config/index'

const HelmetWrapper = ({children, event: {title, code, hitImageUrl}}: {
    children: ReactNode
    event: EventResponse
}) => {
    return (
        <>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content="이벤트 참여" />
                <meta property="og:title" content={title} />
                <meta id="metaOgUrl" property="og:url" content={`${originUrl}/event/${code}`} />
                <meta property="og:description" content="지금 이벤트에 참여하고 경품의 기회를 잡으세요!" />
                <meta property="og:image" content={hitImageUrl} />
            </Helmet>
            {children}
        </>
    )
}

const EventPage: React.FC = () => {
    // const [event, setEvent] = useState<EventResponse>()
    // const [isError, setIsError] = useState<boolean>(false)
    const [isClosed, setIsClosed] = useState<boolean>(false)
    const [isWaiting, setIsWaiting] = useState<boolean>(false)
    const [isParticipation, setIsParticipation] = useState<boolean>(false)
    const [isCancel, setIsCancel] = useState<boolean>(false)
    const {isLogined} = useKakaoLogin()
    // const [nonTarget, setNonTarget] = useState<boolean>(false)
    const params = useParams()
    const eventCode = params.event_code || ''

    // useEffect(() => {
    //     if (!event) return

    //     const isClosed = event ? new Date(event.closeAt) < new Date() : false
    //     const isWaiting = event ? new Date() < new Date(event.openAt) : false
    //     const isParticipation = event ? new Date(event.openAt) <= new Date() : false
    //     const isCancel = event ? event.status === 'CANCEL' : false

    //     setIsClosed(isClosed)
    //     setIsWaiting(isWaiting)
    //     setIsParticipation(isParticipation)
    //     setIsCancel(isCancel)
    // }, [event])

    // const token = useAuthToken()

    const {data: event, error, isLoading} = useParticipateEvent({eventCode})

    useEffect(() => {
        const t = setInterval(() => {
            const isClosed = event ? new Date(event.closeAt) < new Date() : false
            const isWaiting = event ? new Date() < new Date(event.openAt) : false
            const isParticipation = event ? new Date(event.openAt) <= new Date() : false
            const isCancel = event ? event.status === 'CANCEL' : false

            setIsClosed(isClosed)
            setIsWaiting(isWaiting)
            setIsParticipation(isParticipation)
            setIsCancel(isCancel)
        }, 1000)

        return () => {
            t && clearInterval(t)
        }
    }, [event])

    if (!isLogined) {
        return <NeedLogin />
    }

    if (isLoading) {
        return <div style={{color: '#fff'}}>이벤트 불러오는 중...</div>
    }

    if (error instanceof OutofPeriodError) {
        return <Finished />
    } else if (error instanceof AlreadyJoinedError) {
        return <ParticipatedNotice />
    } else if (error instanceof NonTargetError) {
        return <NonTarget />
    } else if (error) {
        <InvalidCode />
    }

    if (event) {
        if (isCancel) {
            return (
                <HelmetWrapper event={event}>
                    <Canceled event={event} />
                </HelmetWrapper>
            )
        }

        if (isClosed) {
            return (
                <HelmetWrapper event={event}>
                    <ParticipatedNotice />
                </HelmetWrapper>
            )
        }
    
        if (isWaiting) {
            return (
                <HelmetWrapper event={event}>
                    <Waiting event={event} setIsWaiting={setIsWaiting} setIsParticipation={setIsParticipation} />
                </HelmetWrapper>
            )
        }
    
        if (isParticipation) {
            return (
                <HelmetWrapper event={event}>
                    <Participation event={event} />
                </HelmetWrapper>
            )
        }
    }

    
    // const callEventApi = useCallback(
    //     async (eventCode: string) => {
    //         try {
    //             const {data: event, result} = await participateEvent(eventCode, token)

    //             if (result === RESULT_CODE.FAIL) {
    //                 setIsError(true)
    //                 return
    //             }

    //             setEvent(event)
    //         } catch (e) {
    //             if (e instanceof OutofPeriodError) {
    //                 throwError(e)
    //             } else if (e instanceof AlreadyJoinedError) {
    //                 setIsClosed(true)
    //             } else if (e instanceof NonTargetError) {
    //                 setNonTarget(true)
    //             } else {
    //                 setIsError(true)
    //             }
    //         }
    //     },
    //     [throwError, token],
    // )

    // useEffect(() => {
    //     const eventCode = params.event_code

    //     if (!token) return
    //     if (!eventCode) {
    //         setIsError(true)
    //         return
    //     }

    //     callEventApi(eventCode)
    // }, [callEventApi, params.event_code, token])

    // if (nonTarget) {
    //     return <NonTarget />
    // }

    // if (isClosed) {
    //     return <ParticipatedNotice />
    // }

    // if (isError) {
    //     return <InvalidCode />
    // }

    // if (!isLogined) {
    //     return <NeedLogin />
    // }

    // if (isCancel && event) {
    //     return (
    //         <Suspense>
    //             <Canceled event={event} />
    //         </Suspense>
    //     )
    // }

    // if (isWaiting && event) {
    //     return <Waiting event={event} setIsWaiting={setIsWaiting} setIsParticipation={setIsParticipation} />
    // }

    // if (isParticipation && event) {
    //     return <Participation event={event} />
    // }

    return null
}

export default EventPage
