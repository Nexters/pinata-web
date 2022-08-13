import CloseIcon from '$assets/icons/CloseIcon'
import {Box} from '$components/commons/Box'
import Flex from '$components/commons/Flex'
import Overlay from '$components/eventResult/Overlay'
import {DialogProvider, useDialogContext} from '$contexts/DialogContext'
import useBodyScrollLock from '$hooks/useBodyScrollLock'
import { colors } from '$styles/colors'
import {typos} from '$styles/typos'
import {extractProp} from '$util/common'
import {PropsWithChildren} from 'react'
import styled, {CSSProperties} from 'styled-components'

type Props<T extends unknown> = PropsWithChildren<T>

const Dialog = ({children}: Props<{}>) => {
    return <DialogProvider>{children}</DialogProvider>
}

const DialogButton = ({children, width}: Props<{width: CSSProperties['width']}>) => {
    const {toggle} = useDialogContext()
    return (
        <Button width={width} onClick={toggle}>
            {children}
        </Button>
    )
}

const DialogContent = ({children, width}: Props<{width: number}>) => {
    const {isOpen, toggle} = useDialogContext()
    useBodyScrollLock(isOpen)

    if (!isOpen) return null

    return (
        <>
            <DialogBox width={width}>{children}</DialogBox>
            <Overlay onClick={toggle} />
        </>
    )
}

const DialogTitle = ({children}: Props<{}>) => {
    const {toggle} = useDialogContext()
    return (
        <Title>
            {children}
            <IconBox onClick={toggle}>
                <CloseIcon size={26} color={colors.white} />
            </IconBox>
        </Title>
    )
}

const IconBox = styled.span``

const Title = styled(Flex).attrs({
    direction: 'row',
    justifyContent: 'space-between',
})`
    ${typos.pretendard['14.26.700']};
    color: ${colors.white};
    margin-bottom: 20px;
`

const DialogBox = styled(Box)`
    background: ${colors.black[300]};
    box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    z-index: 2;
    position: fixed;
    top: 200px;
    padding: 20px;
`

const Button = styled.div<{
    width: CSSProperties['width']
}>`
    width: ${extractProp('width')};
    outline: none;
    border: none;
`

Dialog.Button = DialogButton
Dialog.Content = DialogContent
Dialog.Title = DialogTitle

export default Dialog
