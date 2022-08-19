import { EventStatus, useEventDetail } from '$api/event'
import CircleConfirmOffIcon from '$assets/icons/CircleConfirmOffIcon'
import CircleConfirmOnIcon from '$assets/icons/CircleConfirmOnIcon'
import Flex from '$components/commons/Flex'
import { Section, SectionTitle } from '$components/commons/Section'
import { Table, TableCell, TableHeader, TableHeaders, TableRow } from '$components/commons/Table'
import Badge from '$components/eventResult/Badge'
import LayoutWrapper from '$layout/LayoutWrapper'
import { colors } from '$styles/colors'
import { typos } from '$styles/typos'
import { formatDateTime } from '$util/dateHelper'
import { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import styled, {css, CSSProperties} from 'styled-components'

const EventInfo = () => {
    const params = useParams()
    const eventCode = params.eventcode || ''

    const {data: event} = useEventDetail({eventCode})

    const {title, openAt, closeAt, status, items} = event

    const statusText = useMemo(() => {
        switch (status) {
            case EventStatus.COMPLETE:
            case EventStatus.CANCEL:
                return '완료'
            case EventStatus.WAIT:
            case EventStatus.PROCESS:
            default:
                return '진행중'
        }
    }, [status])

    const badgeColor = useMemo(() => {
        switch (status) {
            case EventStatus.COMPLETE:
            case EventStatus.CANCEL:
                return 'danger'
            case EventStatus.WAIT:
            case EventStatus.PROCESS:
            default:
                return 'active'
        }
    }, [status])

    return (
        <LayoutWrapper isWhite={false} withBorderBottom>
            <Container>
                <Section aria-label='event-title'>
                    <SectionTitle marginBottom={16}>이벤트 이름</SectionTitle>
                    <ValueArea>{title}</ValueArea>
                </Section>
                <Section marginTop={40} aria-label='event-period'>
                    <FlexTitle marginBottom={16} justifyContent="space-between">
                        이벤트 기간
                        <Badge type={badgeColor} text={statusText} />
                    </FlexTitle>
                    <Flex direction='row' justifyContent={'space-between'} style={{
                        gap: 5
                    }}>
                        <ValueArea width={'50%'} align={'center'}>{formatDateTime(openAt)}</ValueArea>
                        <Text>-</Text>
                        <ValueArea width={'50%'} align={'center'}>{formatDateTime(closeAt)}</ValueArea>
                    </Flex>
                </Section>
                <Section marginTop={40} aria-label='event-situation'>
                    <SectionTitle marginBottom={16}>이벤트 현황</SectionTitle>
                    <Table columnSizeList={[122, 122, 122]}>
                        <TableHeaders>
                            <TableHeader>상품</TableHeader>
                            <TableHeader>수령인</TableHeader>
                            <TableHeader>수령 여부</TableHeader>
                        </TableHeaders>
                        {items.map((item) => {
                            return (
                                <TableRow key={item.id}>
                                    <TableCell>
                                        <ItemBox direction="column">
                                            <Image src={item.imageUrl} />
                                            {item.title}
                                        </ItemBox>
                                        </TableCell>
                                    <TableCell>
                                        <ItemBox direction="row">
                                            <ProfileImage src={item.acceptorProfileImageUrl} />
                                            {item.acceptorNickname}
                                        </ItemBox>
                                    </TableCell>
                                    <TableCell>{item.isAccepted ? <CircleConfirmOnIcon size={30} color={colors.blue[100]} /> : <CircleConfirmOffIcon size={30} color={colors.red[100]} />}</TableCell>
                                </TableRow>
                            )
                        })}
                    </Table>
                </Section>
            </Container>
        </LayoutWrapper>
    )
}

const ProfileImage = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 20px;
    margin-right: 5px;
`

const ItemBox = styled(Flex)`
    ${typos.pretendard['13.26.500']};
`

const Image = styled.img`
    width: 120px;
    background: transparent;
    border-radius: 12px;
`

const FlexTitle = styled(Flex).attrs({
    direction: 'row'
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
})<{ width?: CSSProperties['width']; align?: CSSProperties['justifyContent'] }>`
    min-height: 32px;
    padding: 4px 8px;
    background: ${colors.black[300]};
    color: ${colors.white};
    border-radius: 10px;
    ${typos.pretendard['14.26.500']};
    ${({width}) => width && css`width: ${width};` };
    ${({align}) => align && css`
        justify-content: ${align};
        text-align: ${align === 'center' ? align : 'left'};
    `};
`

const Container = styled.div`
    padding: 30px 20px;
`

export default EventInfo