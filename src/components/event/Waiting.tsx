import React, {useEffect, useState} from 'react'
import styled from 'styled-components'

import EventWrapper from '$components/event/EventWrapper'

import {useInterval} from '$hooks/useInterval'
import {TargetEvent} from '$types/Event'
import {changeSecondsHHMMSS} from '$util/time'
import {typos} from '$styles/typos'

const Timer = styled.div`
    height: 45px;
    color: #ffffff;
    ${typos.pretendard['60.43.800']};
`

const Instruction = styled.div`
    margin-top: 30px;
    text-align: center;
    ${typos.pretendard['16.26.500']};
    color: #ffffff;
`

type Props = {
    event: TargetEvent
    setIsWaiting: React.Dispatch<React.SetStateAction<boolean>>
    setIsParticipation: React.Dispatch<React.SetStateAction<boolean>>
}

const Waiting: React.FC<Props> = ({event, setIsParticipation, setIsWaiting}) => {
    const [leftSeconds, setLeftSeconds] = useState<number>(0)
    useEffect(() => {
        if (!event?.openAt) return

        const diff = new Date(event.openAt).getTime() - new Date().getTime()
        const leftSeconds = Math.floor(diff / 1000)

        if (leftSeconds < 0) {
            setLeftSeconds(0)
            setIsWaiting(false)
            setIsParticipation(true)
        } else {
            setLeftSeconds(leftSeconds)
        }
    }, [event])

    useInterval(() => {
        if (leftSeconds > 0) {
            setLeftSeconds((before) => before - 1)
        }
    }, 1000)

    return (
        <EventWrapper>
            <Timer>{changeSecondsHHMMSS(leftSeconds)}</Timer>
            <Instruction>
                "{event.title}"
                <br />
                이벤트 추첨이 곧 시작됩니다.
            </Instruction>
        </EventWrapper>
    )
}

export default Waiting
