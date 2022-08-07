import React from 'react'
import styled from 'styled-components'

const MenuIcon = {
    black: require('$assets/image/menu_icon_black.png'),
    white: require('$assets/image/menu_icon_white.png'),
}

const MenuLogo = {
    black: require('$assets/image/menu_logo_black.png'),
    white: require('$assets/image/menu_logo_white.png'),
}

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

const Logo = styled.div<{isWhite: boolean}>`
    width: 100px;
    height: 30px;
    background-image: url(${(props) => (props.isWhite ? MenuLogo.white : MenuLogo.black)});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`

const MenuButton = styled.button<{isWhite: boolean}>`
    width: 20px;
    height: 20px;

    background-color: transparent;
    border: none;

    background-image: url(${(props) => (props.isWhite ? MenuIcon.white : MenuIcon.black)});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`

type Props = {
    isWhite?: boolean
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Header: React.FC<Props> = ({isWhite = false, setIsOpen}) => {
    const toggleMenu = () => {
        setIsOpen((open) => !open)
    }

    return (
        <Wrapper>
            <Logo isWhite={isWhite} />
            <MenuButton isWhite={isWhite} onClick={toggleMenu} />
        </Wrapper>
    )
}

export default Header
