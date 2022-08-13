import PlusIcon from '$assets/icons/PlusIcon'
import {Box} from '$components/commons/Box'
import Flex from '$components/commons/Flex'
import { colors } from '$styles/colors'
import {typos} from '$styles/typos'
import { MouseEventHandler, useRef } from 'react'
import styled from 'styled-components'
import ImageUploader from './ImageUploader'
import Input, {InputProps} from './Input'
import SelectBox from './SelectBox'

type Image = string

type CardListFormProps = {
    images: Image[]
    inputProps: InputProps
    label: string
    onUpload(imageUrls: string[]): void
}

const CardImage = ({imageUrl}: {imageUrl: string}) => {
    return <Box></Box>
}

const CardListForm = ({images, inputProps, label, onUpload}: CardListFormProps) => {
    const imageUploaderRef = useRef<HTMLInputElement>(null)
    const uploadImage: MouseEventHandler<HTMLDivElement> = (e) => {
        e.preventDefault()
        imageUploaderRef.current && imageUploaderRef.current.click()
    }
    return (
        <>
            <CardListContainer>
                <CardImageItem>
                    <CardButton onClick={uploadImage}>
                        <PlusIcon size={20} color={colors.white} style={{
                            marginBottom: 6,
                            opacity: .5
                        }} />
                        나만의 카드 만들기
                    </CardButton>
                </CardImageItem>
                <ImageUploader onUpload={onUpload} ref={imageUploaderRef} />
                {images.map((imageUrl) => (
                    <CardImageItem key={imageUrl}>
                        <CardImage imageUrl={imageUrl} />
                    </CardImageItem>
                ))}
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

const CardImageItem = styled.div``

const CardListContainer = styled(Flex).attrs({
    direction: 'row',
})`
    overflow-x: auto;

    margin: 0 -20px;
    padding: 20px 0;

    ${CardImageItem} {
        margin: 0 10px 0 20px;

        &:nth-child(n + 2) {
            margin-left: 0;
        }
    }

    &::-webkit-scrollbar {
        display: none;
    }
`

export default CardListForm
