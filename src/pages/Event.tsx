import React, {ReactNode, Suspense, useEffect, useState} from 'react'

import NeedLogin from '$components/event/NeedLogin'
import Waiting from '$components/event/Waiting'
import Participation from '$components/event/Participation'

import useKakaoLogin from '$hooks/useKakaoLogin'
import {EventResponse, useParticipateEvent} from '$api/event'
import {useParams} from 'react-router-dom'
import InvalidCode from '$components/event/InvalidCode'
import Canceled from '$components/event/Canceled'
import {AlreadyJoinedError, NonTargetError, NotFoundError, OutofPeriodError} from '$util/FetchError'
import {ParticipatedNotice} from './EventResult'
import NonTarget from '$components/event/NonTarget'
import Finished from '$components/event/Finished'
import {Helmet} from 'react-helmet'
import {originUrl} from '$config/index'
import Spinner from '$components/commons/Spinner'
import EventWrapper from '$components/event/EventWrapper'

const SuspensePage = () => {
    return (
        <EventWrapper>
            <Spinner />
        </EventWrapper>
    )
}

const HelmetWrapper = ({children, event: {title, code, hitImageUrl}}: {children: ReactNode; event: EventResponse}) => {
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
    const [isClosed, setIsClosed] = useState<boolean>(false)
    const [isWaiting, setIsWaiting] = useState<boolean>(false)
    const [isParticipation, setIsParticipation] = useState<boolean>(false)
    const [isCancel, setIsCancel] = useState<boolean>(false)
    const {isLogined} = useKakaoLogin()
    const params = useParams()
    const eventCode = params.event_code || ''

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

    if (error instanceof NotFoundError) {
        return <InvalidCode />
    } else if (error instanceof OutofPeriodError) {
        return <Finished />
    } else if (error instanceof AlreadyJoinedError) {
        return <ParticipatedNotice />
    } else if (error instanceof NonTargetError) {
        return <NonTarget />
    } else if (error) {
        ;<InvalidCode />
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
                <Suspense fallback={<SuspensePage />}>
                    <HelmetWrapper event={event}>
                        <Waiting event={event} setIsWaiting={setIsWaiting} setIsParticipation={setIsParticipation} />
                    </HelmetWrapper>
                </Suspense>
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

    return <SuspensePage />
}

export default EventPage
