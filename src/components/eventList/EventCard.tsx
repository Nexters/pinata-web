import {EventStatus, Event} from '$api/event'
import ShareIcon from '$assets/icons/ShareIcon'
import Flex from '$components/commons/Flex'
import Card from '$components/eventResult/Card'
import useCopy from '$hooks/useCopy'
import {typos} from '$styles/typos'
import {originUrl} from '$config/index'
import styled from 'styled-components'
import {useMemo} from 'react'
import {useNavigate} from 'react-router-dom'
import {formatDateTime} from '$util/dateHelper'
import ChevronRightIcon from '$assets/icons/ChevronRightIcon'
import {colors} from '$styles/colors'
import useEventStatus from '$hooks/useEventtStatus'

type EventCardProps = Event

const EventCard = ({title, openAt, closeAt, code}: EventCardProps) => {
    const navigate = useNavigate()
    const handleCopy = useCopy()
    const copyEventLink = () => {
        handleCopy(`${originUrl}/event/${code}`)
    }

    const {status} = useEventStatus({openAt, closeAt})

    const statusText = useMemo(() => {
        switch (status) {
            case EventStatus.COMPLETE:
            case EventStatus.CANCEL:
                return '종료된 이벤트'
            case EventStatus.WAIT:
                return '시작전 이벤트'
            case EventStatus.PROCESS:
            default:
                return '진행중인 이벤트'
        }
    }, [status])

    return (
        <Card withOverlay={false}>
            <Card.Content>
                <EventStatusComponent status={status}>{statusText}</EventStatusComponent>
                <Card.Title onClick={() => navigate(`/event/detail/${code}`)} typo={typos.pretendard['18.19.700']}>
                    <Flex direction="row">
                        <Text>{title}</Text>
                        <ChevronRightIcon size={20} color={colors.white} />
                    </Flex>
                </Card.Title>
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

const getColorByStatus = () => (props: {status: EventStatus | null}) => {
    switch (props.status) {
        case EventStatus.WAIT:
            return colors.red[100]
        case EventStatus.PROCESS:
            return colors.blue[100]
        case EventStatus.COMPLETE:
            return colors.black[100]
        case EventStatus.CANCEL:
            return colors.red[100]
        default:
            return '#fff'
    }
}

const Text = styled.span`
    max-width: calc(335px - 20px - 40px);
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`

const EventStatusComponent = styled.div<{
    status: EventStatus | null
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
