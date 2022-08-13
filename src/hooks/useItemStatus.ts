import { EventItem } from '$api/event'
import { BadgeProps } from '$components/eventResult/Badge'

const useItemStatus = ({result, itemTitle, resultMessage}: EventItem) => {
    const badgeProps: Pick<BadgeProps, 'text' | 'type'> = result
        ? {
              text: '당첨',
              type: 'danger',
          }
        : {
              text: '탈락',
              type: 'default',
          }
    const cardTitle = result ? itemTitle || '' : resultMessage

    return {
        badgeProps,
        cardTitle
    }
}

export default useItemStatus