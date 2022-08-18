import Background from '$assets/image/Background'
import Logo from '$assets/image/Logo'
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: relative;

    background-color: #1b1b1e;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`

const HeaderLogo = styled.div`
    width: 100%;
    top: 0;
    position: absolute;
    height: 60px;
    padding: 15px 0;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
`

const Content = styled.div`
    z-index: 1;
    text-align: center;
`

type Props = {
    hasLogo?: boolean
    children: React.ReactNode
}

const EventWrapper: React.FC<Props> = ({children, hasLogo = true}) => {
    return (
        <Wrapper>
            {hasLogo && (
                <HeaderLogo>
                    <Logo />
                </HeaderLogo>
            )}
            <Content>{children}</Content>
            <Background />
        </Wrapper>
    )
}

export default EventWrapper
