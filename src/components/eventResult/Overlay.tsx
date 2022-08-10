import styled from 'styled-components'

const Overlay = ({onClick}: {onClick: () => void}) => {
    return <OverlayBox onClickCapture={onClick} />
}

const OverlayBox = styled.div`
    background: #000000;
    opacity: 0.2;
    position: fixed;
    top: 0;
    height: 100vh;
    width: 480px;
    margin: 0 auto;
`

export default Overlay
