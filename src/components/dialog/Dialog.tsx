import Overlay from '$components/eventResult/Overlay'
import { PropsWithChildren } from 'react'
import styled from 'styled-components'

const Dialog = ({children}: PropsWithChildren<{}>) => {
    return (
        <>
            <DialogBox>
                {children}
            </DialogBox>
            <Overlay />
        </>
    )
}

const DialogBox = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    
`

export default Dialog