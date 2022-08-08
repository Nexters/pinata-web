import MenuIcon from '$assets/icons/MenuIcon'
import Logo from '$assets/image/Logo'
import React from 'react'
import styled, { css } from 'styled-components'

const Wrapper = styled.div<{
    withBorderBottom: boolean
}>`
    position: absolute;
    width: calc(100% - 40px);
    height: 60px;
    padding: 0 20px;

    left: 0px;
    top: 0px;
    z-index: 150;

    background-color: transparent;

    display: flex;
    align-items: center;
    justify-content: space-between;
    ${({withBorderBottom}) => withBorderBottom && css`border-bottom: 1px solid #EFF1F3`};
`

const MenuButton = styled.button`
    border: none;
    outline: none;
    background: transparent;
    padding: 0;
`

type Props = {
    isWhite?: boolean
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
    withBorderBottom?: boolean
}

const Header: React.FC<Props> = ({isWhite = false, setIsOpen, withBorderBottom = false}) => {
    const toggleMenu = () => {
        setIsOpen((open) => !open)
    }

    const color = isWhite ? '#fff' : '#1B1B1E'

    return (
        <Wrapper withBorderBottom={withBorderBottom}>
            <Logo size={87} color={color} />
            <MenuButton onClick={toggleMenu}>
                <MenuIcon size={20} color={color} />
            </MenuButton>
        </Wrapper>
    )
}

export default Header
