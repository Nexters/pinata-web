import React from 'react'
import styled from 'styled-components'

import EventWrapper from '$components/event/EventWrapper'
import { typos } from '$styles/typos'
import useKakaoLogin from '$hooks/useKakaoLogin'

const Text = styled.div`
    ${typos.pretendard['25.38.800']};

    text-align: center;

    color: #ffffff;
`

const LoginButton = styled.button`
    margin-top: 40px;

    width: 180px;
    height: 50px;

    background: #f6e24b;
    border-radius: 50px;
    border: none;

    transition: 0.5s;

    ${typos.pretendard['16.19.600']};
    text-align: center;

    color: #1b1b1e;
`

const NeedLogin: React.FC = () => {
    const {login} = useKakaoLogin()
    return (
        <EventWrapper>
            <Text>
                이벤트에 참여하기 위해
                <br />
                로그인이 필요합니다.
            </Text>
            <LoginButton onClick={login}>카카오로 로그인</LoginButton>
        </EventWrapper>
    )
}

export default NeedLogin
