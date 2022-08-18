import { GiftItem } from '$api/gift'
import { useDeleteImage } from '$api/image'
import CloseIcon from '$assets/icons/CloseIcon'
import Flex from '$components/commons/Flex'
import { colors } from '$styles/colors'
import {typos} from '$styles/typos'
import { EventForm } from '$types/Event'
import { getImageFileName } from '$util/imageHelper'
import { MouseEvent } from 'react'
import { useFormContext } from 'react-hook-form'
import styled from 'styled-components'
import GiftDialog from './GiftDialog'

export type Gift = {
    title: string
    giftImageFileName?: string
}

const GiftList = () => {
    const {deleteImage} = useDeleteImage()
    const {getValues, setValue} = useFormContext<EventForm>()

    const items = getValues('items')

    const modifyItem = (rank: number, newItem?: Pick<GiftItem, 'title' | 'imageUrl'>) => {
        const newItems = JSON.parse(JSON.stringify(items))
        
        if (!newItem) {
            newItems.splice(rank-1, 1)
            console.log('next: ', newItems)
            setValue('items', newItems)
            return
        }
        newItems.splice(rank-1, 1, {
            ...newItem,
            rank,
        })
        setValue('items', newItems)
    }

    const handleDeleteImage = async (e: MouseEvent<HTMLSpanElement>, url: string, rank: number) => {
        e.preventDefault()
        const imageFileName = getImageFileName(url)

        if (imageFileName) {
            await deleteImage({
                imageFileName
            })
            modifyItem(rank)
        }
    }

    return (
        <Flex direction="column" width={'100%'}>
            {items.map(({title, imageUrl, rank}) => (
                <ItemContainer key={rank}>
                    <Item>
                        <GiftDialog mode='modify' addItem={(modifiedItem) => {
                            modifyItem(rank, modifiedItem)
                        }} defaultValues={{title, imageUrl}}>
                            {title}
                        </GiftDialog>
                        <IconBox onClickCapture={(e) => handleDeleteImage(e, imageUrl, rank)}>
                            <CloseIcon size={18} color={colors.white} />
                        </IconBox>
                    </Item>
                </ItemContainer>
            ))}
        </Flex>
    )
}

const IconBox = styled.span`
    display: inline-flex;
    cursor: pointer;
    z-index: 1001;
`

const ItemContainer = styled.div`
    margin-top: 10px;
    &:first-child {
        margin-top: 20px;
    }
    width: 100%;
    user-select: none;
`

const Item = styled(Flex).attrs({
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
    ${typos.pretendard['15.32.500']};

`

export default GiftList
