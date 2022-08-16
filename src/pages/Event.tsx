import React, {useEffect, useState} from 'react'

import NeedLogin from '$components/event/NeedLogin'
import Waiting from '$components/event/Waiting'
import Participation from '$components/event/Participation'

import useKakaoLogin from '$hooks/useKakaoLogin'
import {EventResponse, participateEvent} from '$api/event'
import ROUTE from '$constants/route'
import {Navigate, useParams} from 'react-router-dom'
import useAsyncError from '$hooks/useAsyncError'
import useAuthToken from '$hooks/useAuthToken'
import InvalidCode from '$components/event/InvalidCode'
import Canceled from '$components/event/Canceled'

const EventPage: React.FC = () => {
    // const [eventCode, setEventCode] = useState<string>('')
    const [event, setEvent] = useState<EventResponse>()
    const [isError, setIsError] = useState<boolean>(false)
    const {isLogined} = useKakaoLogin()
    const params = useParams()

    const isClosed = event && event.status === 'CLOSED'
    const isWaiting = event && event.status === 'WAIT'
    const isParticipation = event && event.status === 'PROCESS'
    const isCancel = event && event.status === 'CANCEL'

    const throwError = useAsyncError()
    const token = useAuthToken()

    useEffect(() => {
        const eventCode = params.eventcode

        if (!token) return
        if (!eventCode) {
            setIsError(true)
            return
        }

        participateEvent(eventCode, token).then((res) => {
            if (res.result === 'FAIL') {
                setIsError(true)
                return
            }

            const event = res.data
            setEvent(event)
        })
    }, [params.eventcode, token])

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

    if (isWaiting && event) {
        return <Waiting event={event} />
    }

    if (isParticipation) {
        return <Participation />
    }

    return (
        <div className="App">
            <h1>Event Page</h1>
        </div>
    )
}

export default EventPage
