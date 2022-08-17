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
    eventTitle?: string
    isSuccess?: boolean
    resultMessage?: string
    resultImageURL?: string
    itemId?: number
    itemTitle?: string
    itemImageUrl?: string
}

const EventResult = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const state = (location.state || {}) as LocationState
    const [isParticipated] = useState(state?.closed || false)

    const {isSuccess, eventTitle, resultMessage, resultImageURL, itemId, itemTitle, itemImageUrl} = state

    // 데이터 제대로 안넘어온경우
    if (!eventTitle || !resultMessage || !resultImageURL) {
        navigate(ROUTE.ERROR)
        return null
    }
    const resultTitle = isSuccess ? '당첨' : '탈락'

    return (
        <EventWrapper>
            {isParticipated ? (
                <ParticipatedNotice />
            ) : (
                <Card bgWhite>
                    <Card.Image src={resultImageURL} description={'결과 이미지'} withClose />
                    <Card.Content>
                        <Badge text={resultTitle} type="default" marginBottom={6} />
                        <Card.Title>{}</Card.Title>
                        <Card.Desc>{resultMessage}</Card.Desc>
                    </Card.Content>
                    {isSuccess && <Card.Button>선물 받기</Card.Button>}
                </Card>
            )}
        </EventWrapper>
    )
}

export default EventResult
