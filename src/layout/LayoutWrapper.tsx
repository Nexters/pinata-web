import React, {useState} from 'react'
import styled from 'styled-components'

import Header from '$components/layout/Header'
import Menu from '$components/layout/Menu'

const InnerWrapper = styled.div`
    margin-top: 60px;
`

type Props = {
    children: React.ReactNode
    isWhite: boolean
}

const LayoutWrapper: React.FC<Props> = ({children, isWhite}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
        <>
            <Header isWhite={isWhite && !isOpen} setIsOpen={setIsOpen} />
            <Menu isOpen={isOpen} />
            <InnerWrapper>{children}</InnerWrapper>
        </>
    )
}

export default LayoutWrapper
