import { MouseEventHandler, PropsWithChildren } from 'react'
import styled from 'styled-components'

const Overlay = ({onClick}: PropsWithChildren<{onClick: () => void}>) => {
    const haldleClick: MouseEventHandler<HTMLDivElement> = (e) => {
        e.stopPropagation()
        onClick()
    }
    return <OverlayBox onClick={haldleClick} />
}

const OverlayBox = styled.div`
    background: rgba(0,0,0,.2);
    position: fixed;
    top: 0;
    height: 100vh;
    width: 480px;
    margin: 0 auto;
    z-index: 1000;
    inset: 0;
`

export default Overlay
