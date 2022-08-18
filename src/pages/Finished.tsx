import React from 'react'
import styled from 'styled-components'

import EventWrapper from '$components/event/EventWrapper'

import {typos} from '$styles/typos'
import ROUTE from '$constants/route'
import {useNavigate} from 'react-router-dom'
import {colors} from '$styles/colors'

const Instruction = styled.div`
    margin-top: 30px;
    text-align: center;
    ${typos.pretendard['25.38.800']};
    color: ${colors.white};
`

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

const Finished: React.FC = () => {
    const navigate = useNavigate()

    return (
        <EventWrapper>
            <Instruction>
                이미 끝난
                <br />
                이벤트 입니다.
            </Instruction>
            <Button onClick={() => navigate(ROUTE.MAIN, {replace: true})}>홈으로 돌아가기</Button>
        </EventWrapper>
    )
}

export default Finished
