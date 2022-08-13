import {Section, SectionTitle} from '$components/commons/Section'
import EventList from '$components/eventList/EventList'
import JoinedEventList from '$components/eventList/JoinedEventList'
import ROUTE from '$constants/route'
import useKakaoLogin from '$hooks/useKakaoLogin'
import LayoutWrapper from '$layout/LayoutWrapper'
import {typos} from '$styles/typos'
import { getImageSource } from '$util/imageHelper'
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
                    <IntroTitle>이벤트<br />개설하기</IntroTitle>
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
    color: #FFFFFF;
    ${typos.pretendard['15.21.500']};
    position: absolute;
    bottom: 20px;
`

const IntroTitle = styled.div`
    ${typos.pretendard['27.37.800']};
`

const EventCreateIntro = styled.div`
    background-color: #73BCFF;
    background-image: url(${getImageSource('intro-image.png')});
    background-position: right bottom;
    background-repeat: no-repeat;
    border-radius: 20px;
    color: #1B1B1E;
    padding: 20px 20px 130px;
    cursor: pointer;
    position: relative;
`

const Container = styled.div`
    padding: 30px 20px;
`

export default Main
