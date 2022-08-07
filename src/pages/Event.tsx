import React, {useEffect, useState} from 'react'

import NeedLogin from '$components/event/NeedLogin'
import Waiting from '$components/event/Waiting'
import Closed from '$components/event/Closed'
import Participation from '$components/event/Participation'

import {getEvent} from '$fetchs/getEvent'

import {Event} from '$types/Event'
import useKakaoLogin from '$hooks/useKakaoLogin'
import {participateEvent} from '$api/event'

const EventPage: React.FC = () => {
    const [event, setEvent] = useState<Event>()
    const {login, logout, isLogined, isLoading} = useKakaoLogin()

    const isClosed = event && event.status !== 'wait'
    const isWaiting = event && event.status === 'wait'
    const isParticipation = event && true

    // 여기서 이벤트 정보 호출후 상태 만듬
    useEffect(() => {
        participateEvent('123').then((event) => {
            console.log(event)
            // setEvent(event)
        })
    }, [])

    if (!isLogined) {
        return <NeedLogin />
    }

    if (isClosed) {
        return <Closed />
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
