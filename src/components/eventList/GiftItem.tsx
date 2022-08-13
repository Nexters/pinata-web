import {EventItem} from '$api/event'
import Badge, {BadgeProps} from '$components/eventResult/Badge'
import Card from '$components/eventResult/Card'
import {format} from 'date-fns'

type GiftProps = EventItem

const formatDateTime = (dateTime: string) => format(new Date(dateTime), 'yyyy.MM.dd')

const GiftItem = ({imageFileName, title, eventTitle, joinedDate, isHit}: GiftProps) => {
    const badgeProps: Pick<BadgeProps, 'text' | 'type'> = isHit
        ? {
              text: '당첨',
              type: 'danger',
          }
        : {
              text: '탈락',
              type: 'default',
          }
    return (
        <Card withOverlay={false}>
            <Card.Image src={imageFileName || 'images/hit-image.png'} description={eventTitle} />
            <Card.Content>
                <Badge marginBottom={6} {...badgeProps} />
                <Card.Title>{title}</Card.Title>
                <Card.Desc size={'lg'}>{formatDateTime(joinedDate)} 참여</Card.Desc>
            </Card.Content>
        </Card>
    )
}

export default GiftItem
