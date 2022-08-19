import { useEventDetail } from '$api/event'
import LayoutWrapper from '$layout/LayoutWrapper'
import { useParams } from 'react-router-dom'

const EventInfo = () => {
    const params = useParams()
    const eventCode = params.eventcode || ''

    const {data} = useEventDetail({eventCode})

    console.log(data)

    return (
        <LayoutWrapper isWhite={false} withBorderBottom>
            이벤트 상세
        </LayoutWrapper>
    )
}

export default EventInfo