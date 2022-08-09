import InfoCircleIcon from '$assets/icons/InfoCircleIcon'
import PlusIcon from '$assets/icons/PlusIcon'
import Flex from '$components/commons/Flex'
import {Section, SectionTitle} from '$components/commons/Section'
import CardListForm from '$components/eventForm/CardListForm'
import GiftList from '$components/eventForm/GiftList'
import Input from '$components/eventForm/Input'
import RadioForm from '$components/eventForm/RadioForm'
import LayoutWrapper from '$layout/LayoutWrapper'
import {typos} from '$styles/typos'
import React from 'react'
import {useState} from 'react'
import styled, {css} from 'styled-components'

const radioCommonStyle = css`
    border-radius: 15px;
    ${typos.pretendard['16.32.600']};
`

const radioSelectStyle = css`
    background: #32aaff;
    color: #fff;
`

const radioDefaultStyle = css`
    background: #e8e8e8;
    color: #1b1b1e;
`

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
    const [hitDesc, setHitDesc] = useState('')
    const [failDesc, setFailDesc] = useState('')

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
                            unselectedStyle={radioDefaultStyle}
                            style={radioCommonStyle}>
                            랜덤 모드
                        </RadioForm.Item>
                        <RadioForm.Item
                            width={162}
                            height={100}
                            value={2}
                            selectedStyle={radioSelectStyle}
                            unselectedStyle={radioDefaultStyle}
                            style={radioCommonStyle}>
                            선착순 모드
                        </RadioForm.Item>
                    </RadioForm>
                </Section>
                <Section marginTop={40}>
                    <SectionTitle marginBottom={16}>당첨 상품을 등록하세요</SectionTitle>
                    <Flex direction="column">
                        <Button color={'default'}>
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
                    <CardListForm
                        images={[]}
                        inputProps={{
                            value: hitDesc,
                            onChange: (e) => setHitDesc(e.target.value),
                            placeholder: '이벤트 당첨 안내 및 축하 메시지를 적어주세요',
                        }}
                        label={'당첨'}
                    />
                </Section>
                <Section marginTop={40}>
                    <SectionTitle marginBottom={16}>
                        <Flex direction="row" justifyContent={'space-between'}>
                            탈락 안내 이미지와 메시지를 등록하세요
                            <InfoCircleIcon size={16} color={'#1b1b1e80'} />
                        </Flex>
                    </SectionTitle>
                    <CardListForm
                        images={[]}
                        inputProps={{
                            value: failDesc,
                            onChange: (e) => setFailDesc(e.target.value),
                            placeholder: '이벤트 탈락 안내 및 위로 메시지를 적어주세요',
                        }}
                        label={'탈락'}
                    />
                </Section>
                <Section marginTop={30}>
                    <Button color={'dark'}>이벤트 개설하기</Button>
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

const Button = styled.button<{
    color: 'default' | 'dark'
}>`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    outline: none;
    border: none;
    ${({color}) =>
        color === 'default'
            ? css`
                  background: rgba(27, 27, 30, 0.07);
                  color: #121212;
              `
            : css`
                  background: #1b1b1e;
                  color: #fff;
              `}
    border-radius: 15px;
    height: 52px;
    width: 100%;
    ${typos.pretendard['14.32.500']}

    &:disabled {
        background: rgba(27, 27, 30, 0.07) !important;
        cursor: default;
    }
`

const Container = styled.div`
    padding: 30px 20px;
`

export default CreateEvent
