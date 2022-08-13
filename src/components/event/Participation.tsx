import React, {useState} from 'react'
import styled from 'styled-components'

import EventWrapper from '$components/event/EventWrapper'
import {typos} from '$styles/typos'
import {GiftBox} from './GiftBox'

const H1 = styled.div`
    width: 288px;

    ${typos.pretendard['25.38.800']};

    text-align: center;

    color: #ffffff;
`

// const GiftBox = styled.div`
//     width: 150px;
//     height: 190px;

//     background-color: #000;
// `

const Text = styled.div`
    ${typos.pretendard['16.26.500']}

    text-align: center;
    letter-spacing: -0.333333px;

    color: #ffffff;

    opacity: 0.8;
`

const Section = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 22px;
    margin-bottom: 17px;
    gap: 22px;
`

const Participation: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const handleOpen = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        e.preventDefault()

        setIsOpen(true)
    }

    return (
        <EventWrapper>
            <H1>
                넥스터즈 21기 깜작 선물 <br />
                3분께 드립니다.
            </H1>
            <Section onClick={handleOpen}>
                <GiftBox isOpen={isOpen} />
            </Section>
            <Text>
                지금 바로 이벤트에 참여하려면
                <br />
                위의 선물상자를 클릭해보세요!
            </Text>
        </EventWrapper>
    )
}

export default Participation
