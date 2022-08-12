import React from 'react'
import styled from 'styled-components'

import {Link} from 'react-router-dom'
import { typos } from '$styles/typos'

const Option = styled.div`
    width: 100%;
    height: 40px;

    margin: 20px 0;

    display: flex;
    flex-direction: row;
    align-items: center;
`

const Text = styled.p`
    ${typos.pretendard['23.26.700']};
    line-height: 0;
    color: #fff;
`

const MenuImage = styled.img`
    width: 40px;
    height: 40px;
    margin-right: 12px;
`

type Props = {
    text: string
    link: string
    imageUrl: string
}

const MenuLink: React.FC<Props> = ({text, link, imageUrl}) => {
    return (
        <Link to={link}>
            <Option>
                <MenuImage src={imageUrl} />
                <Text>{text}</Text>
            </Option>
        </Link>
    )
}

export default MenuLink
