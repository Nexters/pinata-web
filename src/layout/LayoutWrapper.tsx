import React, {useState} from 'react'
import styled from 'styled-components'

import Header from '$components/layout/Header'
import Menu from '$components/layout/Menu'

const InnerWrapper = styled.div`
    margin-top: 60px;
    z-index: 1;
`

type Props = {
    children: React.ReactNode
    isWhite: boolean
    withBorderBottom?: boolean
}

const LayoutWrapper: React.FC<Props> = ({children, isWhite, withBorderBottom = false}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
        <>
            <Header isOpen={isOpen} setIsOpen={setIsOpen} withBorderBottom={withBorderBottom && !isOpen} />
            <Menu isOpen={isOpen} />
            <InnerWrapper>{children}</InnerWrapper>
        </>
    )
}

export default LayoutWrapper
