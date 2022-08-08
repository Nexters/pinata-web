import Flex from '$components/commons/Flex'
import Card from '$components/eventResult/Card'
import { Suspense } from 'react'
import styled from 'styled-components'
import {EventItem, useJoinedEventList} from '$api/event'
import Badge, { BadgeProps } from '$components/eventResult/Badge'
import { format } from 'date-fns'

type GiftProps = EventItem

const formatDateTime = (dateTime: string) => format(new Date(dateTime), 'yyyy.MM.dd')

const Gift = ({imageFileName, title, eventTitle, joinedDate, isHit} : GiftProps) => {
    const badgeProps: Pick<BadgeProps, 'text' | 'type'> = isHit ? {
        text: '당첨',
        type: 'danger',

    } : {
        text: '탈락',
        type: 'default'
    }
    return (
        <Card withOverlay={false}>
            <Card.Image src={imageFileName || '/images/example-hit-image.png'} description={eventTitle} />
            <Card.Content>
                <Badge marginBottom={6} {...badgeProps} />
                <Card.Title>{title}</Card.Title>
                <Card.Desc size={'lg'}>{formatDateTime(joinedDate)} 참여</Card.Desc>
            </Card.Content>
        </Card>
    )
}

const JoinedEventList = () => {
    const {data: eventList = []} = useJoinedEventList()

    return (
        <Suspense fallback={<>Loading...</>}>
            <EventListContainer>
            {
                eventList.map((event: EventItem) => (
                    <GiftBox>
                        <Gift key={event.id} {...event} />
                    </GiftBox>
                ))
            }
            </EventListContainer>
        </Suspense>
    )
}

const GiftBox = styled.div``

const EventListContainer = styled(Flex).attrs({
    direction: 'row',
})`
    overflow-x: auto;

    margin: 0 -20px;
    padding: 20px 0;

    ${GiftBox} {
        margin: 0 20px;

        &:nth-child(n+2) {
            margin-left: 0;
        }
    }

    &::-webkit-scrollbar {
        display: none;
    }
`

export default JoinedEventList