import {GiftItem} from '$api/gift'
import {useDeleteImage} from '$api/image'
import CircleCloseIcon from '$assets/icons/CircleCloseIcon'
import PlusIcon from '$assets/icons/PlusIcon'
import {Box} from '$components/commons/Box'
import Flex from '$components/commons/Flex'
import Dialog from '$components/dialog/Dialog'
import {Color, colors} from '$styles/colors'
import {typos} from '$styles/typos'
import {extractProp} from '$util/common'
import {getImageFileName} from '$util/imageHelper'
import {MouseEvent, MouseEventHandler, ReactNode, useEffect, useRef} from 'react'
import {useForm} from 'react-hook-form'
import styled, {css} from 'styled-components'
import FormText from './FormText'
import ImageUploader from './ImageUploader'
import Input from './Input'

type GiftItemForm = Pick<GiftItem, 'title' | 'imageUrl'>

type GiftDialogProps = {
    addItem(item: GiftItemForm): void
    defaultValues?: GiftItemForm
    children: ReactNode
    mode: 'add' | 'modify'
}

const GiftDialogButton = ({onClick, closeDialog}: {onClick(): boolean; closeDialog?(): void}) => {
    const handleClick = () => {
        const result = onClick()
        typeof closeDialog === 'function' && result && closeDialog()
    }
    return (
        <Button color="blue" onClick={handleClick} height={52}>
            등록하기
        </Button>
    )
}

const GiftDialog = ({addItem, defaultValues, children, mode}: GiftDialogProps) => {
    const {
        register,
        getValues,
        setValue,
        watch,
        reset,
        setError,
        clearErrors,
        formState: {errors},
    } = useForm<GiftItemForm>({
        defaultValues,
    })
    const {deleteImage} = useDeleteImage()

    const imageUrl = watch('imageUrl', '')

    useEffect(() => {
        imageUrl && clearErrors('imageUrl')
    }, [clearErrors, imageUrl, setError])

    const imageUploaderRef = useRef<HTMLInputElement>(null)

    const uploadImage: MouseEventHandler<HTMLDivElement> = (e) => {
        e.preventDefault()
        imageUploaderRef.current && imageUploaderRef.current.click()
    }

    const handleClick = () => {
        const [title, imageUrl] = getValues(['title', 'imageUrl'])
        if (!imageUrl) {
            setError('imageUrl', {type: 'required'})
            clearErrors('title')
            return false
        }
        if (!title) {
            setError('title', {type: 'required'})
            clearErrors('imageUrl')
            return false
        }
        if (title.length > 20) {
            setError('title', {type: 'maxLength'})
            clearErrors('imageUrl')
            return false
        }
        addItem({title, imageUrl})
        return true
    }

    const handleUpload = (urls: string[]) => {
        setValue('imageUrl', urls[0])
    }

    const setValueByMode = () => {
        if (mode === 'add') {
            reset({
                title: '',
                imageUrl: undefined,
            })
        } else {
            reset(defaultValues)
        }
    }

    const handleDelete = async (e: MouseEvent<HTMLSpanElement>) => {
        e.stopPropagation()

        const imageFileName = getImageFileName(imageUrl)
        if (imageFileName) {
            if (mode === 'add') {
                await deleteImage({
                    imageFileName,
                })
            }
            setValue('imageUrl', '')
        }
    }

    return (
        <Dialog>
            <Dialog.Button width={'100%'}>{children}</Dialog.Button>
            <Dialog.Content width={335} onOpen={setValueByMode}>
                <Dialog.Title>당첨 상품 이미지 및 이름 등록</Dialog.Title>
                <DialogSubTitle marginBottom={!!errors.imageUrl ? 0 : 10}>
                    선물하실 상품 이미지를 등록하세요
                </DialogSubTitle>
                <FormText isShow={!!errors.imageUrl} text={'상품 이미지를 등록하세요.'} />
                {imageUrl ? (
                    <ImageViewerContainer src={imageUrl}>
                        <IconBox onClick={handleDelete}>
                            <CircleCloseIcon size={24} />
                        </IconBox>
                    </ImageViewerContainer>
                ) : (
                    <Button height={174} onClick={uploadImage}>
                        <PlusIcon size={19} color={colors.white} />
                        <Box
                            typo={typos.pretendard['12.20.500']}
                            style={{
                                marginTop: 5,
                            }}>
                            상품 이미지 등록하기
                        </Box>
                    </Button>
                )}
                <ImageUploader onUpload={handleUpload} ref={imageUploaderRef} />
                <DialogSubTitle marginTop={40} marginBottom={!!errors.title ? 0 : 10}>
                    선물하실 상품 이름을 적어주세요
                </DialogSubTitle>
                <FormText isShow={!!errors.title} text={'상품 이름을 20자 내로 등록하세요.'} />
                <Input
                    {...register('title', {required: true, maxLength: 20, shouldUnregister: true})}
                    value={watch('title')}
                    type="text"
                    placeholder="최대 20글자"
                    style={{
                        marginBottom: 36,
                        background: colors.black[200],
                    }}
                />
                <GiftDialogButton onClick={handleClick} />
            </Dialog.Content>
        </Dialog>
    )
}

const IconBox = styled.span`
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
`

const ImageViewerContainer = styled(Flex).attrs({
    direction: 'row',
    justifyContent: 'center',
    alignItems: 'center',
})<{src: string}>`
    width: 100%;
    height: 220px;
    border-radius: 20px;
    position: relative;
    background-image: url(${extractProp('src')});
    background-size: cover;
    background-repeat: no-repeat;
`

const DialogSubTitle = styled.div<{marginTop?: number; marginBottom?: number}>`
    ${typos.pretendard['14.26.500']};
    color: ${colors.white};
    margin-bottom: ${({marginBottom}) => marginBottom || 0}px;
    margin-top: ${({marginTop}) => marginTop || 0}px;
`
const Button = styled.div<{
    height: number
    color?: Color
}>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    outline: none;
    border: none;
    ${({color}) =>
        color === 'blue'
            ? css`
                  background: ${colors.blue[100]};
              `
            : css`
                  background: #404046;
              `}
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
