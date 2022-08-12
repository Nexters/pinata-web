import {useJoinedEventList} from '$api/event'
import {Box} from '$components/commons/Box'
import GiftItem from '$components/eventList/GiftItem'
import LayoutWrapper from '$layout/LayoutWrapper'
import React from 'react'
import styled from 'styled-components'

const Gifts: React.FC = () => {
    const {data: giftList = []} = useJoinedEventList()

    return (
        <LayoutWrapper isWhite={false} withBorderBottom>
            <Container>
                {giftList.map((gift) => (
                    <GiftCardItem key={gift.id}>
                        <GiftItem {...gift} />
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
