import {Box} from '$components/commons/Box'
import Flex from '$components/commons/Flex'
import EventWrapper from '$components/event/EventWrapper'
import Badge from '$components/eventResult/Badge'
import Card from '$components/eventResult/Card'
import Overlay from '$components/eventResult/Overlay'
import ROUTE from '$constants/route'
import {typos} from '$styles/typos'
import {useState} from 'react'
import {useLocation, useNavigate} from 'react-router-dom'
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
            <Overlay onClick={() => {}} />
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
    margin-top: 40px;
    text-align: center;
    color: #1b1b1e;
    cursor: pointer;
    ${typos.pretendard['16.19.600']};
`

const Container = styled(Box)`
    text-align: center;
    font-style: normal;
    ${typos.pretendard['25.38.800']};
    color: #ffffff;
    z-index: 1;
`

interface LocationState {
    closed?: boolean
}

const EventResult = () => {
    const location = useLocation()
    const state = (location.state || {}) as LocationState
    const [isParticipated] = useState(state?.closed || false)

    return (
        <EventWrapper>
            {isParticipated ? (
                <ParticipatedNotice />
            ) : (
                <Card>
                    <Card.Image src={'images/example-result-card.png'} description={'Image 설명'} withClose />
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
