import { GiftItem } from '$api/gift'
import PlusIcon from '$assets/icons/PlusIcon'
import {Box} from '$components/commons/Box'
import Flex from '$components/commons/Flex'
import Dialog from '$components/dialog/Dialog'
import { colors } from '$styles/colors'
import {typos} from '$styles/typos'
import {extractProp} from '$util/common'
import { MouseEventHandler, ReactNode, useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import ImageUploader from './ImageUploader'
import Input from './Input'

type GiftItemForm = Pick<GiftItem, 'title' | 'imageUrl'>

type GiftDialogProps = {
    addItem(item: GiftItemForm): void
    defaultValues?: GiftItemForm
    children: ReactNode
}

const GiftDialogButton = ({onClick, closeDialog}: {
    onClick(): void
    closeDialog?(): void
}) => {
    const handleClick = () => {
        onClick()
        typeof closeDialog === 'function' && closeDialog()
    }
    return (
        <Button onClick={handleClick} height={52}>
            등록하기
        </Button>
    )
}

const GiftDialog = ({addItem, defaultValues, children}: GiftDialogProps) => {
    const {register, getValues, setValue, watch, reset} = useForm<GiftItemForm>({
        defaultValues
    })

    const imageUrl = watch('imageUrl')

    const imageUploaderRef = useRef<HTMLInputElement>(null)

    const uploadImage: MouseEventHandler<HTMLDivElement> = (e) => {
        e.preventDefault()
        imageUploaderRef.current && imageUploaderRef.current.click()
    }

    const handleClick = () => {
        const [title, imageUrl] = getValues(['title', 'imageUrl'])
        if (!imageUrl) {
            return
        }
        addItem({title, imageUrl})
    }

    const handleUpload = (urls: string[]) => {
        setValue('imageUrl', urls[0])
    }

    useEffect(() => {
        if (!defaultValues) {
            reset({
                title: '',
                imageUrl: ''
            })
        }
    }, [defaultValues, reset])

    return (
        <Dialog>
            <Dialog.Button width={'100%'}>
                {children}
            </Dialog.Button>
            <Dialog.Content width={335}>
                <Dialog.Title>당첨 상품 이미지 및 이름 등록</Dialog.Title>
                <DialogSubTitle>선물하실 상품 이미지를 등록하세요</DialogSubTitle>
                {
                    imageUrl
                    ? <ImageViewerContainer>
                        <img src={imageUrl} width={90} height={90} alt='gift' />
                    </ImageViewerContainer>
                    : <Button height={90} onClick={uploadImage}>
                            <PlusIcon size={19} color={colors.white} />
                            <Box
                                typo={typos.pretendard['12.20.500']}
                                style={{
                                    marginTop: 5,
                                }}>
                                상품 이미지 등록하기
                            </Box>
                        </Button>
                }
                <ImageUploader onUpload={handleUpload} ref={imageUploaderRef} />
                <Divider />
                <DialogSubTitle>선물하실 상품 이름을 적어주세요</DialogSubTitle>
                <Input
                    {...register('title', {required: true})}
                    type='text'
                    placeholder="최대 20글자"
                    style={{
                        marginBottom: 36,
                    }}
                />
                <GiftDialogButton onClick={handleClick} />
            </Dialog.Content>
        </Dialog>
    )
}

const ImageViewerContainer = styled(Flex).attrs({
    direction: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
})`
    & img {
        border: 1px solid rgba(255, 255, 255, .3);
        padding: 2px;
    }
    gap: 2px;
`

const Divider = styled.hr`
    border: 0.5px solid rgba(255, 255, 255, 0.1);
    margin: 20px 0;
`

const DialogSubTitle = styled.div`
    ${typos.pretendard['14.26.500']};
    color: ${colors.white};
    margin-bottom: 10px;
`
const Button = styled.div<{
    height: number
}>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    outline: none;
    border: none;
    background: ${colors.black[700]};
    color: ${colors.white};
    border-radius: 15px;
    height: ${extractProp('height')}px;
    width: 100%;
    ${typos.pretendard['14.32.500']}

    &:disabled {
        background: rgba(27, 27, 30, 0.07) !important;
        cursor: default;
    }
`

export default GiftDialog
