import {useEventList} from '$api/event'
import {Box} from '$components/commons/Box'
import EventCard from '$components/eventList/EventCard'
import LayoutWrapper from '$layout/LayoutWrapper'
import React from 'react'
import styled from 'styled-components'

const EventLists: React.FC = () => {
    const {data} = useEventList()

    if (!data) {
        return null
    }

    return (
        <LayoutWrapper isWhite={false} withBorderBottom>
            <Container>
                {data.data.map((event) => (
                    <EventCardItem key={event.id}>
                        <EventCard {...event} />
                    </EventCardItem>
                ))}
            </Container>
        </LayoutWrapper>
    )
}

const EventCardItem = styled(Box)`
    margin-bottom: 16px;
`

const Container = styled.div`
    padding: 30px 20px;
`

export default EventLists
