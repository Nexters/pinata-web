import {Box} from '$components/commons/Box'
import Flex from '$components/commons/Flex'
import EventWrapper from '$components/event/EventWrapper'
import Badge from '$components/eventResult/Badge'
import Card from '$components/eventResult/Card'
import Overlay from '$components/eventResult/Overlay'
import ROUTE from '$constants/route'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import styled from 'styled-components'

const ParticipatedNotice = () => {
    const navigate = useNavigate()
    return (
        <Flex direction="row" justifyContent="center" alignItems="center">
            <Container>
                <Box>
                    이미 참여한
                    <br />
                    이벤트입니다.
                </Box>
                <Button onClick={() => navigate(ROUTE.MAIN, {replace: true})}>홈으로 돌아가기</Button>
            </Container>
            <Overlay />
        </Flex>
    )
}

const Button = styled.button`
    width: 180px;
    height: 50px;
    background: #ffffff;
    border-radius: 50px;
    border: none;
    outline: none;
    margin-top: 30px;
    font-weight: 600;
    font-size: 16px;
    text-align: center;
    color: #1b1b1e;
    cursor: pointer;
`

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
    const [isParticipated] = useState(false)
    return (
        <EventWrapper>
            {isParticipated ? (
                <ParticipatedNotice />
            ) : (
                <Card>
                    <Card.Image src={'/images/example-result-card.png'} description={'Image 설명'} withClose />
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
