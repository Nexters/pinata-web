import React from 'react'
import styled from 'styled-components'

import {Link} from 'react-router-dom'
import PinataIcon from '$assets/icons/PinataIcon'

const Option = styled.div`
    width: 100%;
    height: 40px;

    margin: 20px 0;

    display: flex;
    flex-direction: row;
    align-items: center;
`

const Text = styled.p`
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 23px;
    line-height: 26px;

    letter-spacing: -0.333333px;

    color: #1b1b1e;
`

type Props = {
    text: string
    link: string
}

const MenuLink: React.FC<Props> = ({text, link}) => {
    return (
        <Link to={link}>
            <Option>
                <PinataIcon size={40} style={{
                    marginRight: 12
                }} />
                <Text>{text}</Text>
            </Option>
        </Link>
    )
}

export default MenuLink
