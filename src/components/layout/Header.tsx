import MenuIcon from '$assets/icons/MenuIcon'
import Logo from '$assets/image/Logo'
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
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
}

const Header: React.FC<Props> = ({isWhite = false, setIsOpen}) => {
    const toggleMenu = () => {
        setIsOpen((open) => !open)
    }

    const color = isWhite ? '#fff' : '#1B1B1E'

    return (
        <Wrapper>
            <Logo size={87} color={color} />
            <MenuButton onClick={toggleMenu}>
                <MenuIcon size={20} color={color} />
            </MenuButton>
        </Wrapper>
    )
}

export default Header
