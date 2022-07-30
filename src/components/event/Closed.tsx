import React from 'react'
import styled from 'styled-components'

import { useNavigate } from 'react-router-dom';

import EventWrapper from '$components/event/EventWrapper'

const Text = styled.div`
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 800;
    font-size: 30px;
    line-height: 43px;

    text-align: center;

    color: #ffffff;
`

const ReturnHomeButton = styled.button`
    margin-top: 30px;

    width: 180px;
    height: 50px;

    background: #FFFFFF;
    border-radius: 50px;
    border: none;

    transition: 0.5s;

    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    text-align: center;

    color: #1b1b1e;
    :hover {
        background: #fff;
    }
`

const Closed: React.FC = () => {
    const navigate = useNavigate()

    const returnToHome = ()=>{
        navigate('/')
    }

    return (
        <EventWrapper>
            <Text>
                이미 참여한
                <br />
                이벤트 입니다.
            </Text>
            <ReturnHomeButton onClick={returnToHome}>홈으로 돌아가기</ReturnHomeButton>
        </EventWrapper>
    )
}

export default Closed
