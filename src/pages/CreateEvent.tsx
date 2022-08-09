import InfoCircleIcon from '$assets/icons/InfoCircleIcon'
import PlusIcon from '$assets/icons/PlusIcon'
import Flex from '$components/commons/Flex'
import {Section, SectionTitle} from '$components/commons/Section'
import GiftList from '$components/eventForm/GiftList'
import Input from '$components/eventForm/Input'
import RadioForm from '$components/eventForm/RadioForm'
import LayoutWrapper from '$layout/LayoutWrapper'
import {typos} from '$styles/typos'
import React from 'react'
import {useState} from 'react'
import styled from 'styled-components'

const radioSelectStyle = {
    background: '#32AAFF',
    borderRadius: 15,
    color: '#fff',
}

const radioDefaultStyle = {
    background: '#E8E8E8',
    borderRadius: 15,
    color: '#1B1B1E',
}

const DEMO_GIFTS = [
    {
        title: '선물 1',
    },
    {
        title: '선물 2',
    },
]

const CreateEvent: React.FC = () => {
    const [title, setTitle] = useState('')

    return (
        <LayoutWrapper isWhite={false} withBorderBottom>
            <Container>
                <Section>
                    <SectionTitle marginBottom={16}>이벤트 제목을 입력하세요</SectionTitle>
                    <Input value={title} onChange={(e) => setTitle(e.target.value)} />
                </Section>
                <Section marginTop={40}>
                    <SectionTitle marginBottom={16}>이벤트 진행 날짜 및 시간을 정해보세요</SectionTitle>
                    <Input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        label={'시작'}
                        style={{
                            marginBottom: 12,
                        }}
                    />
                    <Input value={title} onChange={(e) => setTitle(e.target.value)} label={'종료'} />
                </Section>
                <Section marginTop={40}>
                    <SectionTitle marginBottom={16}>이벤트 모드를 선택하세요</SectionTitle>
                    <RadioForm values={[1, 2]}>
                        <RadioForm.Item
                            width={162}
                            height={100}
                            value={1}
                            selectedStyle={radioSelectStyle}
                            defaultStyle={radioDefaultStyle}>
                            랜덤 모드
                        </RadioForm.Item>
                        <RadioForm.Item
                            width={162}
                            height={100}
                            value={2}
                            selectedStyle={radioSelectStyle}
                            defaultStyle={radioDefaultStyle}>
                            선착순 모드
                        </RadioForm.Item>
                    </RadioForm>
                </Section>
                <Section marginTop={40}>
                    <SectionTitle marginBottom={16}>당첨 상품을 등록하세요</SectionTitle>
                    <Flex direction="column">
                        <Button>
                            <PlusIcon size={19} color={'#1B1B1E'} />
                        </Button>
                        <GiftList items={DEMO_GIFTS} />
                        <Totals>
                            총 상품 수령 인원
                            <NumberHighlight>{DEMO_GIFTS.length}명</NumberHighlight>
                        </Totals>
                    </Flex>
                </Section>
                <Section marginTop={40}>
                    <SectionTitle marginBottom={16}>
                        <Flex direction="row" justifyContent={'space-between'}>
                            당첨 안내 이미지와 메시지를 등록하세요
                            <InfoCircleIcon size={16} color={'#1b1b1e80'} />
                        </Flex>
                    </SectionTitle>
                </Section>
                <Section marginTop={40}>
                    <SectionTitle marginBottom={16}>
                        <Flex direction="row" justifyContent={'space-between'}>
                            탈락 안내 이미지와 메시지를 등록하세요
                            <InfoCircleIcon size={16} color={'#1b1b1e80'} />
                        </Flex>
                    </SectionTitle>
                </Section>
            </Container>
        </LayoutWrapper>
    )
}

const NumberHighlight = styled.span`
    ${typos.pretendard['16.26.700']};
`

const Totals = styled(Flex).attrs({
    direction: 'row',
    justifyContent: 'space-between',
    width: '100%',
})`
    ${typos.pretendard['16.26.500']};
    color: #121212;
    margin-top: 20px;
`

const Button = styled.button`
    cursor: pointer;
    outline: none;
    border: none;
    background: rgba(27, 27, 30, 0.07);
    border-radius: 15px;
    height: 52px;
    width: 100%;
`

const Container = styled.div`
    padding: 30px 20px;
`

export default CreateEvent
