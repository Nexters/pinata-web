import {useJoinedEventList} from '$api/event'
import {Box} from '$components/commons/Box'
import { DetailGiftItem } from '$components/eventList/GiftItem'
import EmptyLayout from '$layout/EmptyLayout'
import LayoutWrapper from '$layout/LayoutWrapper'
import React from 'react'
import styled from 'styled-components'

const Gifts: React.FC = () => {
    const {data} = useJoinedEventList()

    if (!data) {
        return null
    }

    return (
        <LayoutWrapper isWhite={false} withBorderBottom>
            <Container>
                {
                    data.length === 0 && (
                        <EmptyLayout description='아직 참여한 이벤트가 없습니다.' imageName='gift_empty_image.png' />
                    )
                }
                {data.map((gift) => (
                    <GiftCardItem key={gift.itemId}>
                        <DetailGiftItem {...gift} />
                    </GiftCardItem>
                ))}
            </Container>
        </LayoutWrapper>
    )
}

const GiftCardItem = styled(Box)`
    margin-bottom: 30px;
`

const Container = styled.div`
    padding: 30px 20px;
`

export default Gifts
