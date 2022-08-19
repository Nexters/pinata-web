import {EventItem} from '$api/event'
import DownloadIcon from '$assets/icons/DownloadIcon'
import Badge from '$components/eventResult/Badge'
import Card from '$components/eventResult/Card'
import useDownload from '$hooks/useDownload'
import useItemStatus from '$hooks/useItemStatus'
import {colors} from '$styles/colors'
import {typos} from '$styles/typos'
import {format, parseISO} from 'date-fns'
import styled from 'styled-components'

type GiftProps = EventItem

const formatDateTime = (dateTime: string, to = 'yyyy.MM.dd') => {
    dateTime = dateTime.replace(/ /g, 'T')
    return format(parseISO(dateTime), to)
}

const GiftItem = (props: GiftProps) => {
    const {resultImageUrl, eventTitle, participateAt} = props
    const {badgeProps, cardTitle} = useItemStatus(props)

    return (
        <Card withOverlay={false}>
            <Card.Image src={resultImageUrl} description={eventTitle} />
            <Card.Content>
                <Badge marginBottom={6} {...badgeProps} />
                <Card.Title>{cardTitle}</Card.Title>
                <Card.Desc size={'lg'}>{formatDateTime(participateAt)} 참여</Card.Desc>
            </Card.Content>
        </Card>
    )
}

const CustomBadge = ({participateAt}: {participateAt: string}) => {
    return <ParticipateDateLabel>{formatDateTime(participateAt, 'yy.MM.dd')}</ParticipateDateLabel>
}

const ParticipateDateLabel = styled.span`
    background: #7a7a834d;
    color: ${colors.white};
    border-radius: 24px;
    ${typos.pretendard['11.18.400']};
    padding: 3px 10px;
    cursor: default;
`

export const DetailGiftItem = (props: GiftProps) => {
    const {resultImageUrl, eventTitle, participateAt, result, resultMessage, itemImageUrl} = props
    const {badgeProps, cardTitle} = useItemStatus(props)

    const downloadFromUrl = useDownload()

    const handleDownload = () => {
        itemImageUrl && downloadFromUrl(itemImageUrl)
    }

    return (
        <Card withOverlay={false}>
            <Card.Image
                src={resultImageUrl}
                description={eventTitle}
                replaceIcon={() => <CustomBadge participateAt={participateAt} />}
            />
            <Card.Content>
                <Badge marginBottom={6} {...badgeProps} />
                <Card.Title>{cardTitle}</Card.Title>
                <Card.Desc size={'lg'}>{result ? resultMessage : ''}</Card.Desc>
            </Card.Content>
            {result && (
                <Card.Button onClick={handleDownload}>
                    <DownloadIcon
                        size={16}
                        color={colors.white}
                        style={{
                            marginRight: 6,
                        }}
                    />
                    선물 받기
                </Card.Button>
            )}
        </Card>
    )
}

export default GiftItem
