import React, {useState} from 'react'
import styled from 'styled-components'

import EventWrapper from '$components/event/EventWrapper'
import {typos} from '$styles/typos'
import {GiftBox} from './GiftBox'
import {TargetEvent} from '$types/Event'
import {checkEventResult} from '$api/event'
import useAuthToken from '$hooks/useAuthToken'
import {debounce} from '$util/debounce'
import ROUTE from '$constants/route'
import {useNavigate} from 'react-router-dom'

const H1 = styled.div`
    width: 288px;

    ${typos.pretendard['25.38.800']};

    text-align: center;

    color: #ffffff;
`

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

type Props = {
    event: TargetEvent
}

const Participation: React.FC<Props> = ({event}) => {
    const token = useAuthToken()
    const navigate = useNavigate()

    const [isOpen, setIsOpen] = useState<boolean>(false)

    const checkResult = debounce(() => {
        checkEventResult(event.code, token).then((res) => {
            if (res.result === 'FAIL') {
                navigate(ROUTE.ERROR)
                return
            }

            const {data} = res
            const {resultMessage, resultImageURL, itemId, itemTitle, itemImageUrl} = data

            navigate(ROUTE.EVENT.RESULT, {
                state: {
                    isSuccess: data.result,
                    eventTitle: event.title,
                    resultMessage,
                    resultImageURL,
                    itemId,
                    itemTitle,
                    itemImageUrl,
                },
            })
        })
    }, 1000)

    const handleOpen = async (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        e.preventDefault()

        if (isOpen) return

        // ROUTE.EVENT.RESULT
        // state

        setIsOpen(true)
        checkResult()
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
