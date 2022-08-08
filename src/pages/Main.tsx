
import ROUTE from '$constants/route'
import useKakaoLogin from '$hooks/useKakaoLogin'
import LayoutWrapper from '$layout/LayoutWrapper'
import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const Main: React.FC = () => {
    const {login, logout, isLogined, isLoading} = useKakaoLogin()

    if (isLoading) {
        return <div>로그인 중...</div>
    }
    return (
        <LayoutWrapper isWhite={false}>
            <Container>
                <EventCreateIntro>
                    <IntroTitle>이벤트 개설하기</IntroTitle>
                    <IntroDesc>
                    누구나 쉽게 이벤트를 만들 수 있어요!
                    <br />
                    직접 만들러 가볼까요?
                    </IntroDesc>
                </EventCreateIntro>
                <Link to={ROUTE.GIFTS}>Gift</Link>
                <Link to={ROUTE.EVENT.LIST}>Event List</Link>
                <button onClick={isLogined ? logout : login}>{isLogined ? '로그아웃' : '카카오 로그인'}</button>
            </Container>
        </LayoutWrapper>
    )
}

const IntroDesc = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    opacity: 0.67;
    margin-top: 6px;
`

const IntroTitle = styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
`

const EventCreateIntro = styled.div`
    background-color: #32AAFF;
    background-image: url(http://localhost:3000/${'/images/gift-image.png'});
    background-position: right bottom;
    background-repeat: no-repeat;
    border-radius: 20px;
    color: #fff;
    padding: 20px 20px 130px;
`

const Container = styled.div`
    padding: 30px 20px
`

export default Main
