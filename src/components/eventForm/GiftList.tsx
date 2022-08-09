import CloseIcon from '$assets/icons/CloseIcon'
import Flex from '$components/commons/Flex'
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
                    <CloseIcon size={18} color={'#1b1b1e4d'} />
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
    backgroundColor: '#fff',
})`
    border: 1px solid rgba(27, 27, 30, 0.1);
    border-radius: 15px;
    color: #1b1b1e;
    padding: 10px 18px;
    margin-top: 20px;
    ${typos.pretendard['15.32.500']};
`

export default GiftList
