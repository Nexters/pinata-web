import {EventType, Event} from '$api/event'
import ShareIcon from '$assets/icons/ShareIcon'
import Flex from '$components/commons/Flex'
import Card from '$components/eventResult/Card'
import {typos} from '$styles/typos'
import {format} from 'date-fns'
import styled from 'styled-components'

type EventCardProps = Event

const formatDateTime = (dateTime: string) => format(new Date(dateTime), 'yyyy.MM.dd a hh:mm')

const EventCard = ({title, type, openAt, closeAt, code}: EventCardProps) => {
    return (
        <Card withOverlay={false}>
            <Card.Content>
                <EventStatus status={type}>진행중인 이벤트</EventStatus>
                <Card.Title typo={typos.pretendard['18.19.700']}>{title}</Card.Title>
                <Card.Desc size="lg">
                    {formatDateTime(openAt)} - {formatDateTime(closeAt)}
                </Card.Desc>
                <EventLink>
                    <ShareIcon
                        size={20}
                        color={'rgba(255,255,255,.5)'}
                        style={{
                            marginRight: 4,
                        }}
                    />
                    링크 공유하기
                </EventLink>
            </Card.Content>
        </Card>
    )
}

const getColorByStatus = () => (props: {status: EventType}) => {
    switch (props.status) {
        case EventType.WAIT:
            return '#fff'
        case EventType.PROCESS:
            return '#fff'
        case EventType.COMPLETE:
            return '#fff'
        case EventType.CANCEL:
            return '#fff'
        default:
            return '#fff'
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
    alignItems: 'center',
})`
    margin-top: 20px;
    color: rgba(255, 255, 255, .5);
    cursor: pointer;
    ${typos.pretendard['13.19.400']};
`

export default EventCard
