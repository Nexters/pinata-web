import Flex from '$components/commons/Flex'
import ROUTE from '$constants/route'
import useBodyScrollLock from '$hooks/useBodyScrollLock'
import useKakaoLogin from '$hooks/useKakaoLogin'
import {typos} from '$styles/typos'
import { getImageSource } from '$util/imageHelper'
import React from 'react'
import styled from 'styled-components'

import MenuLink from './MenuLink'

type Props = {
    isOpen: boolean
}

const Wrapper = styled.div<{isOpen: boolean}>`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #1B1B1E;
    color: #fff;

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

const KakaoLogin = styled(Flex).attrs({
    direction: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
})`
    position: absolute;
    top: calc(100vh - 50px);
    padding: 0 25px;
    user-select: none;
    ${typos.pretendard['16.19.700']};
    color: #fff;
`

const Button = styled.span`
    cursor: pointer;
`

export const Menu: React.FC<Props> = ({isOpen}) => {
    const menus = [
        {text: '피나타 소개', link: '', imageUrl: getImageSource('images/horse_icon.png')},
        {text: '이벤트 개설하기', link: ROUTE.EVENT.CREATE, imageUrl: getImageSource('images/pinata_icon.png')},
        {text: '개설한 이벤트', link: ROUTE.EVENT.LIST, imageUrl: getImageSource('images/horse_icon.png')},
        {text: '참여한 이벤트', link: ROUTE.GIFTS, imageUrl: getImageSource('images/pinata_icon.png')},
    ]

    const {isLogined, login, logout} = useKakaoLogin()

    useBodyScrollLock(isOpen)

    return (
        <Wrapper isOpen={isOpen}>
            <Select>
                {menus.map((menu) => (
                    <MenuLink key={menu.text} link={menu.link} text={menu.text} imageUrl={menu.imageUrl} />
                ))}
            </Select>
            {isLogined ? (
                <KakaoLogin><Button onClick={logout}>로그아웃</Button></KakaoLogin>
            ) : (
                <KakaoLogin><Button onClick={login}>카카오로 로그인</Button></KakaoLogin>
            )}
        </Wrapper>
    )
}

export default Menu
