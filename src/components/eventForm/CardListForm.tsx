import CheckIcon from '$assets/icons/CheckIcon'
import PlusIcon from '$assets/icons/PlusIcon'
import {Box} from '$components/commons/Box'
import Flex from '$components/commons/Flex'
import { colors } from '$styles/colors'
import {typos} from '$styles/typos'
import { EventForm, ImageUrls } from '$types/Event'
import { MouseEventHandler, useEffect, useRef, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import styled, { css } from 'styled-components'
import ImageUploader from './ImageUploader'
import Input, {InputProps} from './Input'
import RadioForm from './RadioForm'
import SelectBox from './SelectBox'

type CardListFormProps = {
    inputProps: InputProps
    label: string
    onUpload(imageUrls: string[]): void
    radioName: keyof EventForm
    imagesName: keyof ImageUrls
}

const CardImage = ({imageUrl}: {imageUrl: string}) => {
    return <CardImageWrapper imageUrl={imageUrl} />
}

const CardImageWrapper = styled(Box).attrs({
    width: 150,
    height: 90
})<{imageUrl: string}>`
    background: ${({imageUrl}) => `url(${imageUrl})`};
    background-size: cover;
    border-radius: 10px;

`

const selectedStyle = css`
    outline: 4px solid ${colors.white};
`

const unselectedStyle = css`
    outline: none;
`

const defaultRadioStyle = css`
    border-radius: 10px;
`

const CardListForm = ({inputProps, label, onUpload, radioName, imagesName}: CardListFormProps) => {
    const [images, setImages] = useState<string[]>([])
    const imageUploaderRef = useRef<HTMLInputElement>(null)
    const uploadImage: MouseEventHandler<HTMLDivElement> = (e) => {
        e.preventDefault()
        imageUploaderRef.current && imageUploaderRef.current.click()
    }
    const {setValue, watch, getValues} = useFormContext<ImageUrls>()

    const currentImages = watch(imagesName)

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
                        <PlusIcon size={20} color={colors.white} style={{
                            marginBottom: 6,
                            opacity: .5
                        }} />
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
                                <CardImage imageUrl={imageUrl} />
                            </RadioForm.Item>
                        </CardImageItem>
                    ))}
                </RadioForm>
            </CardListContainer>
            <SelectBox label={label} />
            <Input {...inputProps} />
        </>
    )
}

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
