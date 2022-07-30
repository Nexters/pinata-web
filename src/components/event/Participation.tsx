import React from 'react'
import styled from 'styled-components'

import EventWrapper from '$components/event/EventWrapper'

const H1 = styled.div`
    width: 288px;

    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 800;
    font-size: 30px;
    line-height: 43px;

    text-align: center;

    color: #ffffff;
`

const GiftBox = styled.div`
    width: 150px;
    height: 190px;

    background-color: #000;
`

const Text = styled.div`
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    /* or 162% */

    text-align: center;
    letter-spacing: -0.333333px;

    color: #ffffff;

    opacity: 0.8;
`

const SwipeIcon = styled.div`
    width: 16px;
    height: 18px;
    background-image: url(${require('$assets/image/swipe_up.png')});
`

const Section = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 22px;
    margin-bottom: 17px;
    gap: 22px;
`

const Participation: React.FC = () => {
    return (
        <EventWrapper>
            <H1>넥스터즈 21기 깜작 선물 3분께 드립니다.</H1>
            <Section>
                <GiftBox />
                <SwipeIcon/>
            </Section>
            <Text>지금 바로 이벤트에 참여하려면<br/>위의 선물상자를 클릭해보세요!</Text>
        </EventWrapper>
    )
}

export default Participation
