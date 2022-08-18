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
import {RESULT_CODE} from '$util/client'

const EventPage: React.FC = () => {
    // const [eventCode, setEventCode] = useState<string>('')
    const [event, setEvent] = useState<EventResponse>()
    const [isError, setIsError] = useState<boolean>(false)
    const [isClosed, setIsClosed] = useState<boolean>(false)
    const [isWaiting, setIsWaiting] = useState<boolean>(false)
    const [isParticipation, setIsParticipation] = useState<boolean>(false)
    const [isCancel, setIsCancel] = useState<boolean>(false)
    const {isLogined} = useKakaoLogin()
    const params = useParams()

    useEffect(() => {
        if (!event) return

        const isClosed = event ? new Date(event.closeAt) < new Date() : false
        const isWaiting = event ? new Date() < new Date(event.openAt) : false
        const isParticipation = event ? new Date(event.openAt) <= new Date() : false
        const isCancel = event ? event.status === 'CANCEL' : false

        setIsClosed(isClosed)
        setIsWaiting(isWaiting)
        setIsParticipation(isParticipation)
        setIsCancel(isCancel)
    }, [event])

    const token = useAuthToken()

    useEffect(() => {
        const eventCode = params.event_code

        if (!token) return
        if (!eventCode) {
            setIsError(true)
            return
        }

        participateEvent(eventCode, token).then((res) => {
            if (res.result === RESULT_CODE.FAIL) {
                setIsError(true)
                return
            }

            const event = res.data
            setEvent(event)
        })
    }, [params.event_code, token])

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
        return <Waiting event={event} setIsWaiting={setIsWaiting} setIsParticipation={setIsParticipation} />
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
