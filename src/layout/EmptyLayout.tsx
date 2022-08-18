import { Box } from '$components/commons/Box'
import Flex from '$components/commons/Flex'
import { typos } from '$styles/typos'
import { getImageSource } from '$util/imageHelper'
import { ReactNode } from 'react'
import styled from 'styled-components'

type EmptyLayoutProps = {
    imageName: string
    description: string
    children?: ReactNode
}

const EmptyLayout = ({imageName, description, children = null}: EmptyLayoutProps) => {
    return (
        <EmptyContainer>
            <Image src={getImageSource(imageName)} />
            <Box style={{
                marginTop: 10,
                marginBottom: 30,
            }}>{description}</Box>
            {children}
        </EmptyContainer>
    )
}

const Image = styled.img`
    width: 150px;
    height: 150px;
`

const EmptyContainer = styled(Flex).attrs({
    direction: 'column',
    alignItems: 'center',
    justifyContent: 'center'
})`
    ${typos.pretendard['16.26.500']};
    color: rgba(255, 255, 255, .5);
    height: calc(100vh - 61px - 61px);
`

export default EmptyLayout