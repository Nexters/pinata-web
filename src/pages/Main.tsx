import {Section, SectionTitle} from '$components/commons/Section'
import EventList from '$components/eventList/EventList'
import JoinedEventList from '$components/eventList/JoinedEventList'
import ROUTE from '$constants/route'
import useKakaoLogin from '$hooks/useKakaoLogin'
import LayoutWrapper from '$layout/LayoutWrapper'
import {typos} from '$styles/typos'
import React from 'react'
import {useNavigate} from 'react-router-dom'
import styled from 'styled-components'

const Main: React.FC = () => {
    const navigate = useNavigate()
    const {isLoading} = useKakaoLogin()

    if (isLoading) {
        return <div>로그인 중...</div>
    }
    return (
        <LayoutWrapper isWhite={false} withBorderBottom>
            <Container>
                <EventCreateIntro onClick={() => navigate(ROUTE.EVENT.CREATE)}>
                    <IntroTitle>이벤트 개설하기</IntroTitle>
                    <IntroDesc>
                        누구나 쉽게 이벤트를 만들 수 있어요!
                        <br />
                        직접 만들러 가볼까요?
                    </IntroDesc>
                </EventCreateIntro>
                <Section marginTop={40}>
                    <SectionTitle>개설한 이벤트</SectionTitle>
                    <EventList />
                </Section>
                <Section marginTop={40}>
                    <SectionTitle>참여한 이벤트</SectionTitle>
                    <JoinedEventList />
                </Section>
            </Container>
        </LayoutWrapper>
    )
}

const IntroDesc = styled.div`
    opacity: 0.67;
    margin-top: 6px;
    ${typos.pretendard['12.18.400']}
`

const IntroTitle = styled.div`
    ${typos.pretendard['22.18.700']};
`

const EventCreateIntro = styled.div`
    background-color: #32aaff;
    background-image: url(${window.location.origin}/${'/images/gift-image.png'});
    background-position: right -3rem;
    background-repeat: no-repeat;
    border-radius: 20px;
    color: #fff;
    padding: 20px 20px 130px;
    cursor: pointer;
`

const Container = styled.div`
    padding: 30px 20px;
`

export default Main
