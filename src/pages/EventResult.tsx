import {Box} from '$components/commons/Box'
import Flex from '$components/commons/Flex'
import EventWrapper from '$components/event/EventWrapper'
import Badge, {BadgeProps} from '$components/eventResult/Badge'
import Card from '$components/eventResult/Card'
import ROUTE from '$constants/route'
import useDownload from '$hooks/useDownload'
import {typos} from '$styles/typos'
import {useLocation, useNavigate} from 'react-router-dom'
import styled from 'styled-components'

export const ParticipatedNotice = () => {
    const navigate = useNavigate()
    return (
        <EventWrapper>
            <Flex direction="row" justifyContent="center" alignItems="center">
                <Container>
                    <Box>
                        이미 참여한
                        <br />
                        이벤트입니다.
                    </Box>
                    <Button onClick={() => navigate(ROUTE.MAIN, {replace: true})}>홈으로 돌아가기</Button>
                </Container>
            </Flex>
        </EventWrapper>
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
    const downloadImage = useDownload()
    const state = (location.state || {}) as LocationState

    const {isSuccess, eventTitle, itemTitle, resultMessage, resultImageURL, itemImageUrl} = state

    // 데이터 제대로 안넘어온경우
    if (!eventTitle || !resultMessage || !resultImageURL) {
        navigate(ROUTE.ERROR)
        return null
    }
    const badgeProps: BadgeProps = isSuccess
        ? {
              text: '당첨',
              type: 'danger',
          }
        : {
              text: '탈락',
              type: 'default',
          }

    return (
        <EventWrapper>
            <Card bgWhite>
                <Card.Image
                    onClose={() => navigate(ROUTE.MAIN)}
                    src={resultImageURL}
                    description={eventTitle}
                    withClose
                />
                <Card.Content>
                    <Badge {...badgeProps} marginBottom={6} />
                    <Card.Title>{itemTitle}</Card.Title>
                    <Card.Desc>{resultMessage}</Card.Desc>
                </Card.Content>
                {isSuccess && <Card.Button onClick={() => downloadImage(itemImageUrl || '')}>선물 받기</Card.Button>}
            </Card>
        </EventWrapper>
    )
}

export default EventResult
