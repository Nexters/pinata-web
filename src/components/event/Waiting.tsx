import React, {useEffect, useState} from 'react'
import styled from 'styled-components'

import EventWrapper from '$components/event/EventWrapper'

import {useInterval} from '$hooks/useInterval'
import {TargetEvent} from '$types/Event'
import {changeSecondsHHMMSS} from '$util/time'
import { typos } from '$styles/typos'

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
}

const Waiting: React.FC<Props> = ({event}) => {
    const [leftSeconds, setLeftSeconds] = useState<number>(0)
    useEffect(() => {
        if (!event?.closeAt) return

        const diff = new Date(event.closeAt).getTime() - new Date().getTime()
        const leftSeconds = Math.floor(diff / 10)

        if (leftSeconds < 0) {
            setLeftSeconds(0)
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
                넥스터즈 21기 깜짝 선물 3분께 드립니다.
                <br />
                이벤트 추첨이 곧 시작됩니다.
            </Instruction>
        </EventWrapper>
    )
}

export default Waiting
