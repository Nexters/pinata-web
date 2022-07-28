import React from 'react'
import styled from 'styled-components'

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

const LoginButton = styled.button`
    margin-top: 30px;

    width: 180px;
    height: 50px;

    background: #f6e24b;
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

const NeedLogin: React.FC = () => {
    return (
        <EventWrapper>
            <Text>
                이벤트에 참여하기 위해
                <br />
                로그인이 필요합니다.
            </Text>
            <LoginButton>카카오로 로그인</LoginButton>
        </EventWrapper>
    )
}

export default NeedLogin
