import React, {useEffect, useState} from 'react'

import NeedLogin from '$components/event/NeedLogin'
import Waiting from '$components/event/Waiting'
import Participation from '$components/event/Participation'

import useKakaoLogin from '$hooks/useKakaoLogin'
import {EventResponse, participateEvent} from '$api/event'
import ROUTE from '$constants/route'
import {Navigate, useParams} from 'react-router-dom'
import useAuthToken from '$hooks/useAuthToken'
import InvalidCode from '$components/event/InvalidCode'
import Canceled from '$components/event/Canceled'
import {useCallback} from 'react'
import useAsyncError from '$hooks/useAsyncError'

const EventPage: React.FC = () => {
    // const [eventCode, setEventCode] = useState<string>('')
    const [event, setEvent] = useState<EventResponse>()
    const [isError, setIsError] = useState<boolean>(false)
    const {isLogined} = useKakaoLogin()
    const params = useParams()

    const isClosed = event ? new Date(event.closeAt) < new Date() : false
    const isWaiting = event ? new Date() < new Date(event.openAt) : false
    const isParticipation = event ? new Date(event.openAt) <= new Date() : false
    const isCancel = event ? event.status === 'CANCEL' : false

    const token = useAuthToken()

    const throwError = useAsyncError()

    const callEventApi = useCallback(
        async (eventCode: string) => {
            try {
                const {data: event, result} = await participateEvent(eventCode, token)

                if (result === 'FAIL') {
                    setIsError(true)
                    return
                }

                setEvent(event)
            } catch (e) {
                // Error Boundary로 throw
                // 나중에 이벤트가 끝났다는 컴포넌트로 렌더링해주셔요
                throwError(e)
            }
        },
        [token],
    )

    useEffect(() => {
        const eventCode = params.event_code

        if (!token) return
        if (!eventCode) {
            setIsError(true)
            return
        }

        callEventApi(eventCode)
    }, [callEventApi, params.event_code, token])

    if (!event) return null

    if (isError) {
        return <InvalidCode />
    }

    if (!isLogined) {
        return <NeedLogin />
    }

    if (isCancel) {
        return <Canceled event={event} />
    }

    if (isClosed) {
        return (
            <Navigate
                to={ROUTE.EVENT.RESULT}
                state={{
                    closed: true,
                }}
            />
        )
    }

    if (isWaiting) {
        return <Waiting event={event} />
    }

    if (isParticipation) {
        return <Participation event={event} />
    }

    return (
        <div className="App">
            <h1>Event Page</h1>
        </div>
    )
}

export default EventPage
