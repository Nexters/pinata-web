import styled, { css, keyframes } from 'styled-components'
import { createPortal } from 'react-dom'
import Overlay from '$components/eventResult/Overlay'
import { PropsWithChildren } from 'react'
import { DialogProvider, useDialogContext } from '$contexts/DialogContext'
import { colors } from '$styles/colors'
import { typos } from '$styles/typos'
import Flex from '$components/commons/Flex'

const slideUp = keyframes`
    0%,
    50% {
      transform: translateY(100%);
    }
    100% {
      transform: translateY(0);
    
    }
`
  
const slideDown = keyframes`
    0%,
    50% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(100%);
    }
`

const HalfLayer = ({children}: PropsWithChildren<{}>) => {
    return (
        <DialogProvider>
            {children}
        </DialogProvider>
    )
}

const Trigger = ({children}: PropsWithChildren<{}>) => {
    const {toggle} = useDialogContext()
    return (
        <div onClick={toggle}>
        {children}
        </div>
    )
}

const LayerContent = ({children}: PropsWithChildren<{}>) => {
    const {isOpen, toggle} = useDialogContext()
    
    const createPortalRoot = () => {
        const element = document.createElement('div')
        element.id = '__portal'
        document.body.appendChild(element)
        return element
    }

    return createPortal(
        <Container isOpen={isOpen}>
            <Content isOpen={isOpen}>
                {children}
                <CloseButton onClick={toggle}>닫기</CloseButton>
            </Content>
            <Overlay onClick={toggle} withAnimation isOpen={isOpen} />
        </Container>,
        document.getElementById('__portal') || createPortalRoot(),
    )
}

HalfLayer.Trigger = Trigger
HalfLayer.Content = LayerContent

const CloseButton = styled(Flex).attrs({
    direction: 'row',
    justifyContent: 'center',
    alignItems: 'center'
})`
    height: 50px;
    color: ${colors.white};
    ${typos.pretendard['14.19.400']};
    border-top: 1px solid rgba(255, 255, 255, .15);
    cursor: pointer;
`

const Container = styled.div<{isOpen: boolean}>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    max-width: 480px;
    margin: 0 auto;
    display: ${({isOpen}) => isOpen ? 'block' : 'none'};
`

const Content = styled.div<{isOpen: boolean}>`
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1006;
    box-sizing: border-box;
    text-align: center;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    ${({isOpen}) => 
        isOpen
        ? css`
            animation: ${slideUp} 300ms cubic-bezier(0.33, 0, 0.2, 1);
        `
        : css`
            animation: ${slideDown} 100ms ease-out;
        `
    }
    color: ${colors.white};
    background: ${colors.black[200]};
`

export default HalfLayer