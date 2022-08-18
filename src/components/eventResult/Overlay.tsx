import { MouseEventHandler, PropsWithChildren } from 'react'
import styled, { css, keyframes } from 'styled-components'

const FadeIn = keyframes`
   0%,
    50% {
      opacity: 0;
    }
    100% {
        opacity: 1;
    } 
`

const FadeOut = keyframes`
    0%,
    50% {
    opacity: 1;
    }
    100% {
        opacity: 0;
    } 
`

type OverlayProps = {
    onClick: () => void
    withAnimation?: boolean
    isOpen?: boolean
}

const Overlay = ({onClick, withAnimation = false, isOpen = false}: PropsWithChildren<OverlayProps>) => {
    const haldleClick: MouseEventHandler<HTMLDivElement> = (e) => {
        e.stopPropagation()
        onClick()
    }
    return <OverlayBox onClick={haldleClick} withAnimation={withAnimation} isOpen={isOpen} />
}

const OverlayBox = styled.div<Pick<OverlayProps, 'isOpen' | 'withAnimation'>>`
    background: rgba(0,0,0,.2);
    position: fixed;
    top: 0;
    height: 100vh;
    width: 480px;
    margin: 0 auto;
    z-index: 1000;
    inset: 0;
    ${({withAnimation, isOpen}) => withAnimation && (
        isOpen
        ? css`
            animation: ${FadeIn} 300ms ease-in;
        `
        : css`
            animation: ${FadeOut} 100ms ease-out;
        `
    )}
`

export default Overlay
