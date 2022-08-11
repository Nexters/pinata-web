import {Event, useEventList} from '$api/event'
import {Suspense} from 'react'
import styled from 'styled-components'
import Flex from '$components/commons/Flex'
import EventCard from './EventCard'

const EventList = () => {
    const {data: eventList = []} = useEventList()

    return (
        <Suspense fallback={<>Loading...</>}>
            <EventListContainer>
                {eventList.map((event: Event) => (
                    <EventItemCard>
                        <EventCard key={event.id} {...event} />
                    </EventItemCard>
                ))}
            </EventListContainer>
        </Suspense>
    )
}

const EventItemCard = styled.div``

const EventListContainer = styled(Flex).attrs({
    direction: 'row',
})`
    overflow-x: auto;

    margin: 0 -20px;
    padding: 20px 0;

    ${EventItemCard} {
        margin: 0 20px;

        &:nth-child(n + 2) {
            margin-left: 0;
        }
    }

    &::-webkit-scrollbar {
        display: none;
    }
`

export default EventList
