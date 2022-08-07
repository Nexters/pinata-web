import React, {useEffect, useState} from 'react'
import styled from 'styled-components'

import EventWrapper from '$components/event/EventWrapper'

import {useInterval} from '$hooks/useInterval'
import {Event} from '$types/Event'
import {changeSecondsHHMMSS} from '$util/time'

const Timer = styled.div`
    font-family: 'Pretendard';
    font-style: bold;
    font-weight: 800;
    font-size: 59px;
    line-height: 26px;
    height: 45px;
    color: #ffffff;
`

const Instruction = styled.div`
    margin-top: 28;
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;

    text-align: center;
    letter-spacing: -0.333333px;

    color: #ffffff;
`

type Props = {
    event: Event
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
