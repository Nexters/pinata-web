import {Box} from '$components/commons/Box'
import Flex from '$components/commons/Flex'
import EventWrapper from '$components/event/EventWrapper'
import Badge from '$components/eventResult/Badge'
import Card from '$components/eventResult/Card'
import Overlay from '$components/eventResult/Overlay'
import {useState} from 'react'
import styled from 'styled-components'

const ParticipatedNotice = () => {
    return (
        <Flex direction="row" justifyContent="center" alignItems="center">
            <Container>
                이미 참여한
                <br />
                이벤트입니다.
            </Container>
            <Overlay />
        </Flex>
    )
}

const Container = styled(Box)`
    text-align: center;
    font-style: normal;
    font-weight: 800;
    font-size: 30px;
    line-height: 43px;
    color: #ffffff;
    z-index: 1;
`

const EventResult = () => {
    const [isParticipated, participate] = useState(false)
    return (
        <EventWrapper>
            {isParticipated ? (
                <ParticipatedNotice />
            ) : (
                <Card>
                    <Card.Image src={'/images/example-result-card.png'} description={'Image 설명'} />
                    <Card.Content>
                        <Badge text={'탈락'} type="default" marginBottom={6} />
                        <Card.Title>카드 제목</Card.Title>
                        <Card.Desc>
                            누구나 쉽게 이벤트를 만들 수 있어요!
                            <br />
                            직접 만들러 가볼까요?
                        </Card.Desc>
                    </Card.Content>
                    <Card.Button>나도 이벤트 개설하러 가기</Card.Button>
                </Card>
            )}
        </EventWrapper>
    )
}

export default EventResult
