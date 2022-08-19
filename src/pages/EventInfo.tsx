import {useEventDetail} from '$api/event'
import Flex from '$components/commons/Flex'
import {Section, SectionTitle} from '$components/commons/Section'
import Badge from '$components/eventResult/Badge'
import LayoutWrapper from '$layout/LayoutWrapper'
import {colors} from '$styles/colors'
import {typos} from '$styles/typos'
import {formatDateTime} from '$util/dateHelper'
import {useParams} from 'react-router-dom'
import styled, {css, CSSProperties} from 'styled-components'
import {Helmet} from 'react-helmet'
import useEventStatus from '$hooks/useEventtStatus'
import {extractProp} from '$util/common'

const EventInfo = () => {
    const params = useParams()
    const eventCode = params.eventcode || ''

    const {data: event} = useEventDetail({eventCode})

    const {badgeProps} = useEventStatus({
        openAt: event?.openAt || '',
        closeAt: event?.closeAt || '',
    })

    if (!event) {
        return null
    }

    const {title, openAt, closeAt, items} = event

    return (
        <LayoutWrapper isWhite={false} withBorderBottom>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content="이벤트 상세" />
            </Helmet>
            <Container>
                <Section aria-label="event-title">
                    <SectionTitle marginBottom={16}>이벤트 제목</SectionTitle>
                    <ValueArea>{title}</ValueArea>
                </Section>
                <Section marginTop={40} aria-label="event-period">
                    <FlexTitle marginBottom={16} justifyContent="flex-start">
                        이벤트 진행 날짜 및 시간
                        <Badge {...badgeProps} marginLeft={6} />
                    </FlexTitle>
                    <Flex
                        direction="row"
                        justifyContent={'space-between'}
                        style={{
                            gap: 5,
                        }}>
                        <ValueArea width={'50%'} align={'center'}>
                            {formatDateTime(openAt)}
                        </ValueArea>
                        <Text>-</Text>
                        <ValueArea width={'50%'} align={'center'}>
                            {formatDateTime(closeAt)}
                        </ValueArea>
                    </Flex>
                </Section>
                <Section marginTop={40} aria-label="event-situation">
                    <SectionTitle marginBottom={16}>이벤트 현황</SectionTitle>
                    {items.map((item) => (
                        <CardView key={item.id}>
                            <Flex
                                direction="row"
                                justifyContent="space-between"
                                alignItems="flex-start"
                                style={{
                                    paddingBottom: 20,
                                    borderBottom: '1px solid rgba(255, 255, 255, .15)',
                                }}>
                                <Accepted accepted={item.accepted}>{item.accepted ? '수령완료' : '미수령'}</Accepted>
                                <Image src={item.imageUrl} />
                            </Flex>
                            <Flex
                                direction="column"
                                style={{
                                    paddingTop: 20,
                                }}>
                                <Description>
                                    <Title>상품명</Title>
                                    <Content>{item.title}</Content>
                                </Description>
                                <Description>
                                    <Title>수령인</Title>
                                    <Content>{item.acceptorNickname}</Content>
                                </Description>
                            </Flex>
                        </CardView>
                    ))}
                </Section>
            </Container>
        </LayoutWrapper>
    )
}

const Title = styled.span`
    ${typos.pretendard['15.32.600']}
`

const Content = styled.span`
    ${typos.pretendard['15.32.500']}
`

const Description = styled(Flex).attrs({
    direction: 'row',
    justifyContent: 'space-between',
})`
    width: 100%;
`

const Accepted = styled.span<{accepted: boolean}>`
    ${typos.pretendard['18.19.700']};
    color: ${({accepted}) => (accepted ? colors.blue[100] : 'rgba(255, 255, 255, .5)')};
`

const CardView = styled.div`
    background: ${colors.black[300]};
    border-radius: 20px;
    padding: 20px;
    color: ${colors.white};
`

const Image = styled.div<{src: string}>`
    width: 167px;
    height: 100px;
    background: transparent;
    border-radius: 12px;
    background-image: url(${extractProp('src')});
    background-size: cover;
    background-repeat: no-repeat;
`

const FlexTitle = styled(Flex).attrs({
    direction: 'row',
})<{marginBottom?: number}>`
    margin-bottom: ${({marginBottom}) => marginBottom || 0}px;
    color: ${colors.white};
    ${typos.pretendard['16.26.700']};
`

const Text = styled.span`
    color: ${colors.white};
`

const ValueArea = styled(Flex).attrs({
    direction: 'row',
})<{width?: CSSProperties['width']; align?: CSSProperties['justifyContent']}>`
    min-height: 26px;
    padding: 7px 15px;
    background: ${colors.black[300]};
    color: ${colors.white};
    border-radius: 15px;
    ${typos.pretendard['13.26.500']};
    ${({width}) =>
        width &&
        css`
            width: ${width};
        `};
    ${({align}) =>
        align &&
        css`
            justify-content: ${align};
            text-align: ${align === 'center' ? align : 'left'};
        `};
`

const Container = styled.div`
    padding: 30px 20px;
`

export default EventInfo
