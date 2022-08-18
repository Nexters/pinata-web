import InfoCircleIcon from '$assets/icons/InfoCircleIcon'
import Flex from '$components/commons/Flex'
import {Section, SectionTitle} from '$components/commons/Section'
import CardListForm from '$components/eventForm/CardListForm'
import GiftDialog from '$components/eventForm/GiftDialog'
import GiftList from '$components/eventForm/GiftList'
import Input from '$components/eventForm/Input'
import LayoutWrapper from '$layout/LayoutWrapper'
import {typos} from '$styles/typos'
import {extractProp} from '$util/common'
import styled, {css} from 'styled-components'
import {useFormContext} from 'react-hook-form'
import { EVENT_TYPE, useCreateEvent } from '$api/event'
import { format, parseISO } from 'date-fns'
import useAsyncError from '$hooks/useAsyncError'
import { colors } from '$styles/colors'
import { EventForm, ImageUrls } from '$types/Event'
import RadioForm from '$components/eventForm/RadioForm'
import { useNavigate } from 'react-router-dom'
import ROUTE from '$constants/route'
import { useEffect, useState } from 'react'
import { GiftItem } from '$api/gift'
import PlusIcon from '$assets/icons/PlusIcon'

const radioCommonStyle = css`
    border-radius: 15px;
    ${typos.pretendard['16.32.600']};
`

const radioSelectStyle = css`
    background: ${colors.blue[100]};
    color: ${colors.white};
`

const radioDefaultStyle = css`
    background: ${colors.black[300]};
    color: ${colors.white};
`

const required = true

const formatDateToString = (date: string) => format(parseISO(date), 'yyyy-MM-dd HH:mm:ss')

const CreateEvent = () => {
    const {register, handleSubmit, setValue, getValues, formState: {isSubmitSuccessful, errors}, watch} = useFormContext<EventForm & ImageUrls>()
    const {createEvent} = useCreateEvent()
    const throwError = useAsyncError()
    const navigate = useNavigate()

    const items  = watch('items')

    const [completeEventCode, setEventCode] = useState<string | null>(null)

    const onSubmit = async (data: EventForm & ImageUrls) => {
        try {
            const openAt = formatDateToString(data.openAt)
            const closeAt = formatDateToString(data.closeAt)
            const eventFormData = Object.entries(data)
                                            .filter(([key]) => key !== 'hitImageUrls' && key !== 'missImageUrls')
                                                .reduce((obj, [key, value]) => {
                                                    obj[key] = value
                                                    return obj
                                                }, {} as Record<string, any>) as EventForm

            const {eventCode} = await createEvent({
                ...eventFormData,
                openAt,
                closeAt,
                isPeriod: true,
            })
            setEventCode(eventCode)
        } catch (e) {
            throwError(e)
        }
    }

    useEffect(() => {
        if (isSubmitSuccessful && Object.keys(errors).length < 1) {
            navigate(`${ROUTE.EVENT.CREATE_COMPLETE}/${completeEventCode}`, {
                replace: true
            })
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isSubmitSuccessful, completeEventCode, errors])

    const defaultTypeProps = {
        width: 162,
        height: 100,
        selectedStyle: radioSelectStyle,
        unselectedStyle: radioDefaultStyle,
        style: radioCommonStyle,
    }

    const addItem = (item: Pick<GiftItem, 'title' | 'imageUrl'>) => {
        const currentItems = getValues('items')
        const newItem: GiftItem = {...item, rank: currentItems.length+1}
        setValue('items', [...currentItems, newItem])
    }

    return (
        <LayoutWrapper isWhite={false} withBorderBottom>
            <Container>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Section>
                        <SectionTitle marginBottom={16}>이벤트 제목을 입력하세요</SectionTitle>
                        <Input {...register('title', {required})} value={watch('title')} type="text" />
                    </Section>
                    <Section marginTop={40}>
                        <SectionTitle marginBottom={16}>이벤트 진행 날짜 및 시간을 정해보세요</SectionTitle>
                        <Input
                            value={watch('openAt')}
                            {...register('openAt', {required})}
                            label={'시작'}
                            style={{
                                marginBottom: 12,
                            }}
                            type="datetime-local"
                        />
                        <Input {...register('closeAt', {required})} value={watch('closeAt')} label={'종료'} type="datetime-local" />
                    </Section>
                    <Section marginTop={40}>
                        <SectionTitle marginBottom={16}>이벤트 모드를 선택하세요</SectionTitle>
                        <RadioForm>
                            <RadioForm.Item 
                                name="type" 
                                value={EVENT_TYPE.RANDOM} 
                                {...defaultTypeProps}>
                            랜덤 모드
                            </RadioForm.Item>
                            <RadioForm.Item 
                            name="type" 
                            value={EVENT_TYPE.FCFS}
                            {...defaultTypeProps}>
                            선착순 모드
                            </RadioForm.Item>
                        </RadioForm>
                    </Section>
                    <Section marginTop={40}>
                        <SectionTitle marginBottom={16}>당첨 상품을 등록하세요</SectionTitle>
                        <Flex direction="column">
                            <GiftDialog addItem={addItem} mode={'add'}>
                                <Button color={'default'} height={52}>
                                    <PlusIcon size={19} color={colors.white} />
                                </Button>
                            </GiftDialog>
                            <GiftList />
                            <Totals>
                                총 상품 수령 인원
                                <NumberHighlight>{items.length}명</NumberHighlight>
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
                            imagesName='hitImageUrls'
                            inputProps={{
                                ...register('hitMessage', {required}),
                                value: watch('hitMessage'),
                                type: 'text',
                                placeholder: '이벤트 당첨 안내 및 축하 메시지를 적어주세요',
                            }}
                            label={'hitMessage'}
                            onUpload={(urls: string[]) => {
                                setValue('hitImageUrl', urls[0])
                            }}
                            radioName={'hitImageUrl'}
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
                            imagesName='missImageUrls'
                            inputProps={{
                                ...register('missMessage', {required}),
                                value: watch('missMessage'),
                                type: 'text',
                                placeholder: '이벤트 탈락 안내 및 위로 메시지를 적어주세요',
                            }}
                            label={'missMessage'}
                            onUpload={(urls: string[]) => {
                                setValue('missImageUrl', urls[0])
                            }}
                            radioName={'missImageUrl'}
                        />
                    </Section>
                    <Section marginTop={30}>
                        <Button type="submit" color={'blue'} height={52}>
                            이벤트 개설하기
                        </Button>
                    </Section>
                </form>
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
    color: ${colors.white};
    margin-top: 20px;
`

const Button = styled.button<{
    color: 'default' | 'blue'
    height: number
}>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    outline: none;
    border: none;
    ${({color}) =>
        color === 'default'
            ? css`
                  background: ${colors.black[300]};
                  color: ${colors.white};
              `
            : css`
                  background: ${colors.blue[100]};
                  color: ${colors.white};
              `}
    border-radius: 15px;
    height: ${extractProp('height')}px;
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
