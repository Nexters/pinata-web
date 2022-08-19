import CheckIcon from '$assets/icons/CheckIcon'
import PlusIcon from '$assets/icons/PlusIcon'
import {Box} from '$components/commons/Box'
import Flex from '$components/commons/Flex'
import {colors} from '$styles/colors'
import {typos} from '$styles/typos'
import {EventForm, ImageUrls} from '$types/Event'
import ChevronDownIcon from '$assets/icons/ChevronDownIcon'
import {MouseEvent, MouseEventHandler, useEffect, useRef, useState} from 'react'
import {useFormContext} from 'react-hook-form'
import styled, {css} from 'styled-components'
import HalfLayer from './HalfLayer'
import ImageUploader from './ImageUploader'
import Input, {InputProps} from './Input'
import RadioForm from './RadioForm'
import {TrashIcon} from '@radix-ui/react-icons'
import {useDeleteImage} from '$api/image'
import {DEFAULT_HIT_IMAGES, DEFAULT_MISS_IMAGES} from '$constants/formData'
import {getImageFileName} from '$util/imageHelper'

type CardListFormProps = {
    inputProps: InputProps
    label: keyof EventForm
    onUpload(imageUrls: string[]): void
    radioName: keyof EventForm
    imagesName: keyof ImageUrls
    selectTitle: string
    messageList: string[]
}

type CardImageProps = {
    imageUrl: string
    imagesName: keyof ImageUrls
    radioName: keyof EventForm
}

const CardImage = ({imageUrl, imagesName, radioName}: CardImageProps) => {
    const {setValue, getValues} = useFormContext<ImageUrls & EventForm>()
    const {deleteImage} = useDeleteImage()

    const isDefaultImage =
        imagesName === 'hitImageUrls' ? DEFAULT_HIT_IMAGES.includes(imageUrl) : DEFAULT_MISS_IMAGES.includes(imageUrl)

    const deleteImageFromList = (fileName: string) => {
        const images = getValues(imagesName)

        const nextImages = images.filter((imageUrl) => getImageFileName(imageUrl) !== fileName)

        setValue(imagesName, nextImages)
        setValue(radioName, '')
    }

    const handleDelete = async (e: MouseEvent<HTMLSpanElement>) => {
        e.stopPropagation()

        const imageFileName = getImageFileName(imageUrl)
        if (imageFileName) {
            await deleteImage({
                imageFileName,
            })

            // delete image from list
            deleteImageFromList(imageFileName)
        }
    }

    return (
        <CardImageWrapper imageUrl={imageUrl}>
            {!isDefaultImage && (
                <IconBox onClickCapture={handleDelete}>
                    <TrashIcon color={colors.white} />
                </IconBox>
            )}
        </CardImageWrapper>
    )
}

const IconBox = styled.span`
    position: absolute;
    top: -10px;
    right: -10px;
    display: inline-flex;
    background: ${colors.red[100]};
    width: 25px;
    height: 25px;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    cursor: pointer;
    z-index: 1;
`

const CardImageWrapper = styled(Box).attrs({
    width: 150,
    height: 90,
})<{imageUrl: string}>`
    background: ${({imageUrl}) => `url(${imageUrl})`};
    background-size: cover;
    border-radius: 10px;
    position: relative;
`

const selectedStyle = css`
    border: 4px solid ${colors.white};
`

const unselectedStyle = css`
    border: 4px solid transparent;
`

const defaultRadioStyle = css`
    border-radius: 15px;
`

const defaultLayerRadioStyle = css`
    ${typos.pretendard['14.26.500']};
    margin-bottom: 10px;
`

const CardListForm = ({
    inputProps,
    label,
    onUpload,
    radioName,
    imagesName,
    selectTitle,
    messageList,
}: CardListFormProps) => {
    const [images, setImages] = useState<string[]>([])
    const imageUploaderRef = useRef<HTMLInputElement>(null)
    const uploadImage: MouseEventHandler<HTMLDivElement> = (e) => {
        e.preventDefault()
        imageUploaderRef.current && imageUploaderRef.current.click()
    }
    const {setValue, watch, getValues} = useFormContext<EventForm & ImageUrls>()

    const currentImages = watch(imagesName)

    const currentMessage = watch(label) as string

    const selectedMessage = messageList.includes(currentMessage) ? currentMessage : '직접 입력'

    useEffect(() => {
        setImages(currentImages)
    }, [currentImages])

    const handleUpload = (urls: string[]) => {
        const prevImages = getValues(imagesName)
        setValue(imagesName, [urls[0], ...prevImages])
        onUpload(urls)
    }

    return (
        <>
            <CardListContainer>
                <CardImageItem marginLeft={20}>
                    <CardButton onClick={uploadImage}>
                        <PlusIcon
                            size={20}
                            color={colors.white}
                            style={{
                                marginBottom: 6,
                                opacity: 0.5,
                            }}
                        />
                        나만의 카드 만들기
                    </CardButton>
                </CardImageItem>
                <ImageUploader onUpload={handleUpload} ref={imageUploaderRef} />
                <RadioForm>
                    {images.map((imageUrl) => (
                        <CardImageItem key={imageUrl}>
                            <RadioForm.Item
                                name={radioName}
                                value={imageUrl}
                                width={150}
                                height={90}
                                selectedStyle={selectedStyle}
                                unselectedStyle={unselectedStyle}
                                style={defaultRadioStyle}
                                selectIcon={CheckIcon}>
                                <CardImage imageUrl={imageUrl} imagesName={imagesName} radioName={radioName} />
                            </RadioForm.Item>
                        </CardImageItem>
                    ))}
                </RadioForm>
            </CardListContainer>
            <HalfLayer>
                <HalfLayer.Trigger>
                    <SelectTrigger>
                        {selectedMessage}
                        <ChevronDownIcon size={24} color={'#9E9EA9'} />
                    </SelectTrigger>
                </HalfLayer.Trigger>
                <HalfLayer.Content>
                    <SelectContent>
                        <SelectTitle>{selectTitle}</SelectTitle>
                        <RadioForm align={'vertical'}>
                            {messageList.map((message) => (
                                <RadioForm.Item
                                    key={message}
                                    width={'100%'}
                                    height={'100%'}
                                    name={label}
                                    value={message}
                                    selectedStyle={css``}
                                    unselectedStyle={css``}
                                    style={defaultLayerRadioStyle}
                                    withRadioButton>
                                    {message}
                                </RadioForm.Item>
                            ))}
                            <RadioForm.Item
                                width={'100%'}
                                height={'100%'}
                                name={label}
                                value={''}
                                selectedStyle={css``}
                                unselectedStyle={css``}
                                style={defaultLayerRadioStyle}
                                withRadioButton
                                forceSelectIfEmpty>
                                직접 입력
                            </RadioForm.Item>
                        </RadioForm>
                    </SelectContent>
                </HalfLayer.Content>
            </HalfLayer>
            <Input {...inputProps} />
        </>
    )
}

const SelectTitle = styled.div`
    ${typos.pretendard['14.26.700']};
    color: ${colors.white};
    margin-bottom: 20px;
    text-align: left;
    height: 50px;
    line-height: 50px;
`

const SelectContent = styled.div`
    padding: 0 20px 16px 20px;
`

const SelectTrigger = styled(Flex).attrs({
    direction: 'row',
    justifyContent: 'space-between',
})`
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 15px;
    color: ${colors.white};
    height: 32px;
    ${typos.pretendard['14.32.500']};
    padding: 4px 16px;
    margin-bottom: 10px;
`

const CardButton = styled(Flex).attrs({
    direction: 'column',
    justifyContent: 'center',
})`
    border-radius: 10px;
    background: ${colors.black[300]};
    color: ${colors.white};
    ${typos.pretendard['12.20.500']};
    width: 150px;
    height: 90px;
    cursor: pointer;
`

const CardImageItem = styled.div<{marginLeft?: number}>`
    margin-left: ${({marginLeft}) => marginLeft || 0}px;

    &:last-child {
        margin-right: 20px !important;
    }
`

const CardListContainer = styled(Flex).attrs({
    direction: 'row',
})`
    overflow-x: auto;

    margin: 0 -20px;
    padding: 20px 0;

    ${CardImageItem} {
        margin-right: 10px;
    }

    &::-webkit-scrollbar {
        display: none;
    }
`

export default CardListForm
