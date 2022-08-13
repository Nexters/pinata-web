import {EventStatus, Event} from '$api/event'
import ShareIcon from '$assets/icons/ShareIcon'
import Flex from '$components/commons/Flex'
import Card from '$components/eventResult/Card'
import {typos} from '$styles/typos'
import {format} from 'date-fns'
import styled from 'styled-components'

type EventCardProps = Event

const formatDateTime = (dateTime: string) => format(new Date(dateTime), 'yyyy.MM.dd a hh:mm')

const EventCard = ({title, status, openAt, closeAt, code}: EventCardProps) => {
    const copyEventLink = () => {
        console.log(code)
    }
    return (
        <Card withOverlay={false}>
            <Card.Content>
                <EventStatusComponent status={status}>진행중인 이벤트</EventStatusComponent>
                <Card.Title typo={typos.pretendard['18.19.700']}>{title}</Card.Title>
                <Card.Desc size="lg">
                    {formatDateTime(openAt)} - {formatDateTime(closeAt)}
                </Card.Desc>
                <EventLink onClick={copyEventLink}>
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

const getColorByStatus = () => (props: {status: EventStatus}) => {
    switch (props.status) {
        case EventStatus.WAIT:
            return '#fff'
        case EventStatus.PROCESS:
            return '#fff'
        case EventStatus.COMPLETE:
            return '#fff'
        case EventStatus.CANCEL:
            return '#fff'
        default:
            return '#fff'
    }
}

const EventStatusComponent = styled.div<{
    status: EventStatus
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
