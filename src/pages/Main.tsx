import {EVENT_TYPE} from '$api/event'
import {Section, SectionTitle} from '$components/commons/Section'
import EventList from '$components/eventList/EventList'
import JoinedEventList from '$components/eventList/JoinedEventList'
import {DEFAULT_HIT_IMAGES, DEFAULT_MISS_IMAGES} from '$constants/formData'
import ROUTE from '$constants/route'
import LayoutWrapper from '$layout/LayoutWrapper'
import {colors} from '$styles/colors'
import {typos} from '$styles/typos'
import {getImageSource} from '$util/imageHelper'
import React, {Suspense, useEffect} from 'react'
import {useFormContext} from 'react-hook-form'
import {useNavigate} from 'react-router-dom'
import styled from 'styled-components'

const Main: React.FC = () => {
    const navigate = useNavigate()

    const {
        formState: {isDirty},
        reset,
    } = useFormContext()

    useEffect(() => {
        isDirty &&
            reset(
                {
                    type: EVENT_TYPE.RANDOM,
                    hitImageUrls: DEFAULT_HIT_IMAGES,
                    missImageUrls: DEFAULT_MISS_IMAGES,
                    items: [],
                },
                {
                    keepValues: false,
                },
            )
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isDirty])

    return (
        <LayoutWrapper isWhite={false} withBorderBottom>
            <Container>
                <EventCreateIntro onClick={() => navigate(ROUTE.EVENT.CREATE)}>
                    <IntroTitle>
                        이벤트
                        <br />
                        개설하기
                    </IntroTitle>
                    <IntroDesc>
                        누구나 쉽게 이벤트를 만들 수 있어요!
                        <br />
                        직접 만들러 가볼까요?
                    </IntroDesc>
                </EventCreateIntro>
                <Section marginTop={40}>
                    <SectionTitle>개설한 이벤트</SectionTitle>
                    <Suspense fallback={<Loading />}>
                        <EventList />
                    </Suspense>
                </Section>
                <Section marginTop={40}>
                    <SectionTitle>참여한 이벤트</SectionTitle>
                    <Suspense fallback={<Loading />}>
                        <JoinedEventList />
                    </Suspense>
                </Section>
            </Container>
        </LayoutWrapper>
    )
}

const Loading = styled.div`
    color: ${colors.white};
    ${typos.pretendard['12.18.400']};
`

const IntroDesc = styled.div`
    color: ${colors.white};
    ${typos.pretendard['15.21.500']};
    position: absolute;
    bottom: 20px;
`

const IntroTitle = styled.div`
    ${typos.pretendard['27.37.800']};
`

const EventCreateIntro = styled.div`
    background-color: #73bcff;
    background-image: url(${getImageSource('intro-image.png')});
    background-position: right bottom;
    background-repeat: no-repeat;
    border-radius: 20px;
    color: #1b1b1e;
    padding: 20px 20px 130px;
    cursor: pointer;
    position: relative;
`

const Container = styled.div`
    padding: 30px 20px;
`

export default Main
