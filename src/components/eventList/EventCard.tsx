import {EventStatus, Event} from '$api/event'
import ShareIcon from '$assets/icons/ShareIcon'
import Flex from '$components/commons/Flex'
import Card from '$components/eventResult/Card'
import useCopy from '$hooks/useCopy'
import {typos} from '$styles/typos'
import {originUrl} from '$config/index'
import {format} from 'date-fns'
import styled from 'styled-components'
import {useMemo} from 'react'

type EventCardProps = Event

const formatDateTime = (dateTime: string) => format(new Date(dateTime), 'yyyy.MM.dd a hh:mm')

const EventCard = ({title, status, openAt, closeAt, code}: EventCardProps) => {
    const handleCopy = useCopy()
    const copyEventLink = () => {
        handleCopy(`${originUrl}/event/${code}`)
    }

    const statusText = useMemo(() => {
        switch (status) {
            case EventStatus.COMPLETE:
            case EventStatus.CANCEL:
                return '완료된 이벤트'
            case EventStatus.WAIT:
            case EventStatus.PROCESS:
            default:
                return '진행중인 이벤트'
        }
    }, [status])

    return (
        <Card withOverlay={false}>
            <Card.Content>
                <EventStatusComponent status={status}>{statusText}</EventStatusComponent>
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
            return '#60B3FF'
        case EventStatus.PROCESS:
            return '#60B3FF'
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
    width: 100%;
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
    color: rgba(255, 255, 255, 0.5);
    cursor: pointer;
    ${typos.pretendard['13.19.400']};
`

export default EventCard
