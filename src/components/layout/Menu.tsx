import ROUTE from '$constants/route'
import useBodyScrollLock from '$hooks/useBodyScrollLock'
import useKakaoLogin from '$hooks/useKakaoLogin'
import {typos} from '$styles/typos'
import React from 'react'
import styled from 'styled-components'

import MenuLink from './MenuLink'

type Props = {
    isOpen: boolean
}

const Wrapper = styled.div<{isOpen: boolean}>`
    position: absolute;
    width: 100%;
    height: 100vh;
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
    bottom: 85px;
    left: 25px;
    cursor: pointer;
    user-select: none;
    ${typos.pretendard['16.19.700']};
`

export const Menu: React.FC<Props> = ({isOpen}) => {
    const menus = [
        {text: '피나타 소개', link: ''},
        {text: '이벤트 개설하기', link: ROUTE.EVENT.CREATE},
        {text: '개설한 이벤트', link: ROUTE.EVENT.LIST},
        {text: '참여한 이벤트', link: ''},
    ]

    const {isLogined, login, logout} = useKakaoLogin()

    useBodyScrollLock(isOpen)

    return (
        <Wrapper isOpen={isOpen}>
            <Select>
                {menus.map((menu) => (
                    <MenuLink link={menu.link} text={menu.text} />
                ))}
            </Select>
            {isLogined ? (
                <KakaoLogin onClick={logout}>로그아웃</KakaoLogin>
            ) : (
                <KakaoLogin onClick={login}>카카오로 로그인</KakaoLogin>
            )}
        </Wrapper>
    )
}

export default Menu
