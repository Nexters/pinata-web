import Flex from '$components/commons/Flex'
import {Suspense} from 'react'
import styled from 'styled-components'
import {EventItem, useJoinedEventList} from '$api/event'
import GiftItem from './GiftItem'

const JoinedEventList = () => {
    const {data: giftList = []} = useJoinedEventList()

    return (
        <Suspense fallback={<>Loading...</>}>
            <EventListContainer>
                {giftList.map((gift: EventItem) => (
                    <GiftBox>
                        <GiftItem key={gift.id} {...gift} />
                    </GiftBox>
                ))}
            </EventListContainer>
        </Suspense>
    )
}

const GiftBox = styled.div``

const EventListContainer = styled(Flex).attrs({
    direction: 'row',
})`
    overflow-x: auto;

    margin: 0 -20px;
    padding: 20px 0;

    ${GiftBox} {
        margin: 0 20px;

        &:nth-child(n + 2) {
            margin-left: 0;
        }
    }

    &::-webkit-scrollbar {
        display: none;
    }
`

export default JoinedEventList
