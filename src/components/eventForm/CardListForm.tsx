import PlusIcon from '$assets/icons/PlusIcon'
import {Box} from '$components/commons/Box'
import Flex from '$components/commons/Flex'
import { colors } from '$styles/colors'
import {typos} from '$styles/typos'
import { MouseEventHandler, useRef } from 'react'
import styled, { css } from 'styled-components'
import ImageUploader from './ImageUploader'
import Input, {InputProps} from './Input'
import RadioForm from './RadioForm'
import SelectBox from './SelectBox'

type Image = string

type CardListFormProps = {
    images: Image[]
    inputProps: InputProps
    label: string
    onUpload(imageUrls: string[]): void
    onSelect(imageUrl: string): void
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

const CardListForm = ({images, inputProps, label, onUpload, onSelect}: CardListFormProps) => {
    const imageUploaderRef = useRef<HTMLInputElement>(null)
    const uploadImage: MouseEventHandler<HTMLDivElement> = (e) => {
        e.preventDefault()
        imageUploaderRef.current && imageUploaderRef.current.click()
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
                <ImageUploader onUpload={onUpload} ref={imageUploaderRef} />
                <RadioForm values={images}>
                    {images.map((imageUrl) => (
                        <CardImageItem key={imageUrl}>
                            <RadioForm.Item 
                                onSelect={onSelect} 
                                value={imageUrl} 
                                width={150} 
                                height={90} 
                                selectedStyle={selectedStyle} 
                                unselectedStyle={unselectedStyle} 
                                style={defaultRadioStyle}>
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
