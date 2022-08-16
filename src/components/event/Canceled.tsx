import React from 'react'
import styled from 'styled-components'

import EventWrapper from '$components/event/EventWrapper'

import {TargetEvent} from '$types/Event'
import {typos} from '$styles/typos'
import ROUTE from '$constants/route'
import {useNavigate} from 'react-router-dom'

const Instruction = styled.div`
    margin-top: 30px;
    text-align: center;
    ${typos.pretendard['16.26.500']};
    color: #ffffff;
`

type Props = {
    event: TargetEvent
}

const Button = styled.button`
    width: 180px;
    height: 50px;
    background: #ffffff;
    border-radius: 50px;
    border: none;
    outline: none;
    margin-top: 40px;
    text-align: center;
    color: #1b1b1e;
    cursor: pointer;
    ${typos.pretendard['16.19.600']};
`

const Canceled: React.FC<Props> = ({event}) => {
    const navigate = useNavigate()

    return (
        <EventWrapper>
            <Instruction>
                "{event.title}"
                <br />
                이벤트는 취소되었습니다.
            </Instruction>
            <Button onClick={() => navigate(ROUTE.MAIN, {replace: true})}>홈으로 돌아가기</Button>
        </EventWrapper>
    )
}

export default Canceled
