import React, {useEffect, useState} from 'react'

import NeedLogin from '$components/event/NeedLogin'
import Waiting from '$components/event/Waiting'
import Participation from '$components/event/Participation'

import useKakaoLogin from '$hooks/useKakaoLogin'
import {EventResponse, participateEvent} from '$api/event'
import ROUTE from '$constants/route'
import { Navigate } from 'react-router-dom'
import useAsyncError from '$hooks/useAsyncError'

const EventPage: React.FC = () => {
    const [event, setEvent] = useState<EventResponse>()
    const {isLogined} = useKakaoLogin()

    const isClosed = event && event.status !== 'wait'
    const isWaiting = event && event.status === 'wait'
    const isParticipation = event && true

    const throwError = useAsyncError()

    const callParticipageEvent = async () => {
        try {
            const event = await participateEvent('123')
            setEvent(event)
        } catch (e: unknown) {
            throwError(e)
        }
    }

    // 여기서 이벤트 정보 호출후 상태 만듬
    useEffect(() => {
        callParticipageEvent()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (!isLogined) {
        return <NeedLogin />
    }

    if (isClosed) {
        return <Navigate to={ROUTE.EVENT.RESULT} state={{
            closed: true
        }} />
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
