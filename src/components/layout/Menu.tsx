import React from 'react'
import styled from 'styled-components'

import MenuLink from './MenuLink'

type Props = {
    isOpen: boolean
}

const Wrapper = styled.div<{isOpen: boolean}>`
    position: absolute;
    width: 100%;
    height: calc(100% - 60px);
    background-color: white;

    padding-top: 60px;

    z-index: 100;

    a {
        text-decoration: none;
    }

    transform: translateX(${(props) => (props.isOpen ? '0' : '100%')});
    transition: transform 250ms ease-in-out;
`

const Select = styled.section`
    margin: 18px;
`

const KakaoLogin = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;

    width: 100px;
    height: 60px;
    background-color: red;
`

export const Menu: React.FC<Props> = ({isOpen}) => {
    const menus = [
        {text: '피나타 소개', link: ''},
        {text: '이벤트 개설하기', link: ''},
        {text: '개설한 이벤트', link: ''},
        {text: '참여한 이벤트', link: ''},
    ]

    return (
        <Wrapper isOpen={isOpen}>
            <Select>
                {menus.map((menu) => (
                    <MenuLink link={menu.link} text={menu.text} />
                ))}
            </Select>
            <KakaoLogin />
        </Wrapper>
    )
}

export default Menu
