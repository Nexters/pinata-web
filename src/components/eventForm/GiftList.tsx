import CloseIcon from '$assets/icons/CloseIcon'
import Flex from '$components/commons/Flex'
import { colors } from '$styles/colors'
import {typos} from '$styles/typos'
import styled from 'styled-components'

export type Gift = {
    title: string
    giftImageFileName?: string
}

type GiftListProps = {
    items: Gift[]
}

const GiftList = ({items}: GiftListProps) => {
    return (
        <Flex direction="column" width={'100%'}>
            {items.map(({title}, index) => (
                <GiftItem key={index}>
                    {title}
                    <CloseIcon size={18} color={colors.white} />
                </GiftItem>
            ))}
        </Flex>
    )
}

const GiftItem = styled(Flex).attrs({
    direction: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 'calc(100% - 36px)',
    height: 30,
    backgroundColor: colors.black[700],
})`
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    color: ${colors.white};
    padding: 10px 18px;
    margin-top: 20px;
    ${typos.pretendard['15.32.500']};
`

export default GiftList
