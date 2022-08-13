import React, {ReactNode} from 'react'
import {detectIsMobile} from '$util/common'

import styled from 'styled-components'

const Wrapper = styled.div`
    width: 100vw;

    display: flex;
    justify-content: center;

    padding: 0;
    margin: 0;
`

const MWrapper = styled.div`
    width: 100vw;
    min-height: 100vh;

    background: #1b1b1e;
`

const MobileScreen = styled.div`
    position: relative;
    width: 480px;
    min-height: 100vh;

    background: #1b1b1e;

    overflow: hidden;
`

type Props = {
    children?: ReactNode
}

export const MobileWrapper: React.FC<Props> = ({children}) => {
    const isMobile = detectIsMobile()

    if (isMobile) {
        return <MWrapper>{children}</MWrapper>
    }

    return (
        <Wrapper>
            <MobileScreen>{children}</MobileScreen>
        </Wrapper>
    )
}
