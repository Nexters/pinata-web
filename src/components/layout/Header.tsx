import CloseIcon from '$assets/icons/CloseIcon'
import MenuIcon from '$assets/icons/MenuIcon'
import Logo from '$assets/image/Logo'
import ROUTE from '$constants/route'
import React from 'react'
import { useNavigate } from 'react-router-dom'
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
    background: #1B1B1E;
    ${({withBorderBottom}) => withBorderBottom && css`border-bottom: 1px solid #eff1f31a`};
`

const MenuButton = styled.button`
    border: none;
    outline: none;
    background: transparent;
    padding: 0;
`

const Clickable = styled.span`
    cursor: pointer;
    width: 100px;
    height: 30px;
`

type Props = {
    isOpen: boolean
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
    withBorderBottom?: boolean
}

const Header: React.FC<Props> = ({isOpen, setIsOpen, withBorderBottom = false}) => {
    const navigate = useNavigate()
    const toggleMenu = () => {
        setIsOpen((open) => !open)
    }
    const gotoHome = () => navigate(ROUTE.MAIN)

    return (
        <Wrapper withBorderBottom={withBorderBottom}>
            <Clickable onClick={gotoHome}><Logo /></Clickable>
            <MenuButton onClick={toggleMenu}>
                {isOpen ? <CloseIcon size={30} color={'#fff'} /> : <MenuIcon size={20} color={'#fff'} />}
            </MenuButton>
        </Wrapper>
    )
}

export default Header
