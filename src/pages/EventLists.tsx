import {useEventList} from '$api/event'
import {Box} from '$components/commons/Box'
import Flex from '$components/commons/Flex'
import EventCard from '$components/eventList/EventCard'
import LayoutWrapper from '$layout/LayoutWrapper'
import { colors } from '$styles/colors'
import { typos } from '$styles/typos'
import { getImageSource } from '$util/imageHelper'
import React from 'react'
import styled from 'styled-components'

const EventLists: React.FC = () => {
    const {data} = useEventList()

    if (!data) {
        return null
    }

    return (
        <LayoutWrapper isWhite={false} withBorderBottom>
            <Container>
                {
                    data.length === 0 && 
                    <EmptyContainer>
                        <Image src={getImageSource('event_empty_image.png')} />
                        <Box style={{
                            marginTop: 10,
                            marginBottom: 30,
                        }}>아직 개설한 이벤트가 없습니다.</Box>
                        <Button>이벤트 개설하기</Button>
                    </EmptyContainer>
                }
                {data.map((event) => (
                    <EventCardItem key={event.id}>
                        <EventCard {...event} />
                    </EventCardItem>
                ))}
            </Container>
        </LayoutWrapper>
    )
}

const Button = styled.button`
    outline: none;
    border: none;
    background: ${colors.blue[100]};
    color: ${colors.white};
    ${typos.pretendard['14.32.500']};
    padding: 8px 26px;
    border-radius: 27px;
    cursor: pointer;
`

const EmptyContainer = styled(Flex).attrs({
    direction: 'column',
    alignItems: 'center',
    justifyContent: 'center'
})`
    ${typos.pretendard['16.26.500']};
    color: rgba(255, 255, 255, .5);
    height: calc(100vh - 61px - 61px);
`

const Image = styled.img`
    width: 150px;
    height: 150px;
`

const EventCardItem = styled(Box)`
    margin-bottom: 16px;
`

const Container = styled.div`
    padding: 30px 20px;
    min-height: 100%;
`

export default EventLists
