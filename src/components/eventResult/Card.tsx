import CloseIcon from '$assets/icons/CloseIcon'
import Flex from '$components/commons/Flex'
import {extractProp} from '$util/common'
import {ReactNode} from 'react'
import styled from 'styled-components'
import {Typo, typos} from '$styles/typos'
import Overlay from './Overlay'

const Card = ({children, withOverlay = true}: {children: ReactNode; withOverlay?: boolean}) => {
    return (
        <>
            <CardWrapper direction={'row'} justifyContent={'center'} alignItems="center">
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
}

const Image = ({src, description = '', withClose = false}: ImageProps) => {
    return (
        <CardImage src={src}>
            <CardImageTitle>{description}</CardImageTitle>
            {withClose && (
                <IconBox>
                    <CloseIcon size={26} />
                </IconBox>
            )}
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
    color: #1b1b1e;
    background-color: rgba(27, 27, 30, 0.07);
    border: none;
    outline: none;
    cursor: pointer;
    height: 40px;
    width: calc(100% - 40px);
    margin-bottom: 20px;
    ${typos.pretendard['14.32.500']};
`

const CardDesc = styled.div<{
    size: 'lg' | 'md'
}>`
    ${({size}) => (size === 'md' ? typos.pretendard['12.18.400'] : typos.pretendard['14.19.400'])};
    color: rgba(255, 255, 255, .5);
    opacity: 0.5;
    overflow: auto;
    max-height: 75px;
`

const CardTitle = styled.div<{
    typo: Typo
}>`
    font-style: normal;
    color: #fff;
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
    ${typos.pretendard['14.20.600']};
`

const CardImage = styled.div<{src: string}>`
    background: rgba(27, 27, 30, 0.07);
    position: relative;
    height: 197px;
    width: 100%;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    background: url(${window.location.origin}/${extractProp('src')});
    background-repeat: no-repeat;
    background-size: 100%;
`

const CardWrapper = styled(Flex).attrs({
    direction: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
})`
    background: #2C2C30;
    min-width: 335px;
    color: #fff;
    border-radius: 20px;
    z-index: 1;
    position: relative;
`

Card.Image = Image
Card.Button = Button
Card.Content = Content
Card.Title = Title
Card.Desc = Desc

export default Card
