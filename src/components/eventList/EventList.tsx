import { Event, EventType, useEventList } from '$api/event'
import Card from '$components/eventResult/Card'
import { Suspense } from 'react'
import styled from 'styled-components'
import {format} from 'date-fns'
import ShareIcon from '$assets/icons/ShareIcon'
import { typos } from '$styles/typos'
import Flex from '$components/commons/Flex'

type EventCardProps = Event

const formatDateTime = (dateTime: string) => format(new Date(dateTime), 'yyyy.MM.dd a hh:mm')

const EventCard = ({title, type, openAt, closeAt, code}: EventCardProps) => {
    return (
        <Card withOverlay={false}>
            <Card.Content>
                <EventStatus status={type}>진행중인 이벤트</EventStatus>
                <Card.Title typo={typos.pretendard['18.19.700']}>{title}</Card.Title>
                <Card.Desc size='lg'>{formatDateTime(openAt)} - {formatDateTime(closeAt)}</Card.Desc>
                <EventLink>
                    <ShareIcon size={20} color={'#1B1B1E'} style={{
                        marginRight: 4
                    }} />
                    링크 공유하기
                    </EventLink>
            </Card.Content>
        </Card>
    )
}

const getColorByStatus = () => (props: {
    status: EventType
}) => {
    switch(props.status) {
        case EventType.WAIT:
            return '#1B1B1E'
        case EventType.PROCESS:
            return '#32AAFF'
        case EventType.COMPLETE:
            return '#1B1B1E'
        case EventType.CANCEL:
            return '#1B1B1E'
        default:
            return '#1B1B1E'
    }
}

const EventStatus = styled.div<{
    status: EventType
}>`
    color: ${getColorByStatus()};
    margin-bottom: 16px;
    ${typos.pretendard['12.19.600']};
`

const EventLink = styled(Flex).attrs({
    direction: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
})`
    margin-top: 20px;
    color: #1B1B1E;
    opacity: .8;
    cursor: pointer;
    ${typos.pretendard['13.19.400']};
`

const EventList = () => {
    const {data: eventList = []} = useEventList()

    return (
        <Suspense fallback={<>Loading...</>}>
            <>
        {
            eventList.map((event) => (
                <EventCard key={event.id} {...event} />
            ))
        }
        </>
        </Suspense>
    )
}



export default EventList