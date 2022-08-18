import {useEventList} from '$api/event'
import {Box} from '$components/commons/Box'
import EventCard from '$components/eventList/EventCard'
import ROUTE from '$constants/route'
import EmptyLayout from '$layout/EmptyLayout'
import LayoutWrapper from '$layout/LayoutWrapper'
import { colors } from '$styles/colors'
import { typos } from '$styles/typos'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const EventLists: React.FC = () => {
    const navigate = useNavigate()
    const {data} = useEventList()

    const startToMakeEvent = () => {
        navigate(ROUTE.EVENT.CREATE)
    }

    if (!data) {
        return null
    }

    return (
        <LayoutWrapper isWhite={false} withBorderBottom>
            <Container>
                {
                    data.length === 0 && 
                    <EmptyLayout description='아직 개설한 이벤트가 없습니다.' imageName='event_empty_image.png'>
                        <Button onClick={startToMakeEvent}>이벤트 개설하기</Button>
                    </EmptyLayout>
                }
                {data.map((event) => (
                    <EventCardItem key={event.id}>
                        <EventCard {...event} />
                    </EventCardItem>
                ))}
            </Container>
        </LayoutWrapper>
    )
}

const Button = styled.button`
    outline: none;
    border: none;
    background: ${colors.blue[100]};
    color: ${colors.white};
    ${typos.pretendard['14.32.500']};
    padding: 8px 26px;
    border-radius: 27px;
    cursor: pointer;
`

const EventCardItem = styled(Box)`
    margin-bottom: 16px;
`

const Container = styled.div`
    padding: 30px 20px;
    min-height: 100%;
`

export default EventLists
