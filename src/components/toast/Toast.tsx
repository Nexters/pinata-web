import styled, { keyframes } from 'styled-components'
import ReactDOM from 'react-dom'
import {ReactNode} from 'react'
import Flex from '$components/commons/Flex'
import { typos } from '$styles/typos'
import { noop } from '$util/common'
import { colors } from '$styles/colors'

const containerId = '__toast_container'

const bottomUp = keyframes`
    0%,
    50% {
      transform: translateY(100%);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    
    }
`

const Container = styled(Flex).attrs({
    direction: 'row',
    justifyContent: 'center'
})`
    text-align: center;
    box-sizing: border-box;
    position: fixed;
    bottom: 2.4rem;
    left: 0;
    right: 0;
    z-index: 10006;
`

const ToastList = styled.div`
    box-sizing: border-box;
`

const ToastBox = styled(Flex).attrs({
    direction: 'row',
    justifyContent: 'center',
})`
    background: rgba(0, 0, 0, .95);
    border-radius: 15px;
    padding: 12px 25px;
    margin: 0.5rem 0;
    color: ${colors.white};
    ${typos.pretendard['13.26.500']};
    animation: ${bottomUp} 350ms cubic-bezier(0.33, 0, 0.2, 1);
`

type ToastOptions = {
    delay: number
    onClick: () => void
}

const defaultOptions: ToastOptions = {
    delay: 3000,
    onClick: noop,
}

type ToastMessage = {
    id: string
    component: ReactNode
}

const toastList: ToastMessage[] = []

const renderDOM = () => {
    const container = document.getElementById(containerId)
    ReactDOM.render(
        <ToastList>
            {toastList.map(({id, component}) => (
                <div key={id}>{component}</div>
            ))}
        </ToastList>,
        container,
    )
}

function toast(message: string, delay?: number): void
function toast(message: string, options?: ToastOptions): void
function toast(message: string, delayOrOptions?: number | ToastOptions): void {
    const {delay = defaultOptions.delay, onClick = noop} =
        typeof delayOrOptions === 'number' ? {delay: delayOrOptions} : delayOrOptions || {}

    renderDOM()

    const id = Date.now().toLocaleString()
    toastList.push({
        id,
        component: <ToastBox onClick={onClick}>{message}</ToastBox>,
    })

    renderDOM()
    setTimeout(() => {
        const index = toastList.findIndex((t) => t.id === id)
        toastList.splice(index, 1)
        renderDOM()
    }, delay)
}

export default toast

export const ToastContainer = () => {
    return <Container id={containerId} />
}