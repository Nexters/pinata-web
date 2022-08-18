import CloseIcon from '$assets/icons/CloseIcon'
import Flex from '$components/commons/Flex'
import {extractProp} from '$util/common'
import {ReactNode} from 'react'
import styled, { css } from 'styled-components'
import {Typo, typos} from '$styles/typos'
import Overlay from './Overlay'
import { colors } from '$styles/colors'

type CardProps = {
    children: ReactNode; 
    withOverlay?: boolean
    bgWhite?: boolean
}

const Card = ({children, withOverlay = true, bgWhite = false}: CardProps) => {
    return (
        <>
            <CardWrapper withOverlay={withOverlay} bgWhite={bgWhite} direction={'row'} justifyContent={'center'} alignItems="center">
                {children}
            </CardWrapper>
            {withOverlay && <Overlay onClick={() => {}} />}
        </>
    )
}

const Content = ({children}: {children: ReactNode}) => {
    return <CardContent>{children}</CardContent>
}

const Title = ({children, typo = typos.pretendard['22.32.700']}: {children: ReactNode; typo?: Typo}) => {
    return <CardTitle typo={typo}>{children}</CardTitle>
}

const Desc = ({children, size = 'md'}: {children: ReactNode; size?: 'lg' | 'md'}) => {
    return <CardDesc size={size}>{children}</CardDesc>
}

type ImageProps = {
    src: string
    description?: string
    withClose?: boolean
    replaceIcon?(): JSX.Element
    onClose?(): void
}

const Image = ({src, description = '', withClose = false, replaceIcon, onClose = () => {}}: ImageProps) => {
    const ReplaceIcon = replaceIcon
    return (
        <CardImage src={src}>
            <CardImageTitle>{description}</CardImageTitle>
            {withClose && (
                <IconBox onClick={onClose}>
                    <CloseIcon size={26} />
                </IconBox>
            )}
            {
                <IconBox>
                    {ReplaceIcon && <ReplaceIcon />}
                </IconBox>
            }
        </CardImage>
    )
}

const IconBox = styled.span`
    position: absolute;
    top: 18px;
    right: 18px;
    cursor: pointer;
`

const Button = styled.button`
    border-radius: 10px;
    padding: 7px 0;
    color: ${colors.white};
    background-color: ${colors.black[700]};
    border: none;
    outline: none;
    cursor: pointer;
    height: 45px;
    width: calc(100% - 40px);
    margin-bottom: 20px;
    ${typos.pretendard['14.32.500']};
`

const CardDesc = styled.div<{
    size: 'lg' | 'md'
}>`
    ${({size}) => (size === 'md' ? typos.pretendard['12.18.400'] : typos.pretendard['14.19.400'])};
    color: inherit;
    opacity: 0.5;
    overflow: auto;
    max-height: 75px;
    text-align: left;
`

const CardTitle = styled.div<{
    typo: Typo
}>`
    font-style: normal;
    color: inherit;
    margin-bottom: 6px;
    ${extractProp('typo')};
`

const CardContent = styled(Flex).attrs({
    direction: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
})`
    padding: 20px;
    width: calc(100% - 40px);
    position: relative;
`

const CardImageTitle = styled.div`
    position: absolute;
    bottom: 0;
    background: rgba(122, 122, 131, 0.3);
    color: #fff;
    width: calc(100% - 40px);
    padding: 10px 20px;
    text-align: left;
    ${typos.pretendard['14.20.600']};
`

const CardImage = styled.div<{src: string}>`
    background: rgba(27, 27, 30, 0.07);
    position: relative;
    height: 197px;
    width: 100%;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    background: url(${extractProp('src')});
    background-repeat: no-repeat;
    background-size: 100%;
`

const CardWrapper = styled(Flex).attrs({
    direction: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
})<{bgWhite: boolean; withOverlay: boolean}>`
    ${({bgWhite}) => bgWhite
    ? css`
        background: ${colors.white};
        color: ${colors.black[700]};
    `
    : css`
        background: ${colors.black[300]};
        color: ${colors.white};
    `
    }
    min-width: 335px;
    border-radius: 20px;
    z-index: ${({withOverlay}) => withOverlay ? 1006 : 0};
    position: relative;
`

Card.Image = Image
Card.Button = Button
Card.Content = Content
Card.Title = Title
Card.Desc = Desc

export default Card
