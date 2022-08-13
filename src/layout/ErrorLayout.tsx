import Flex from '$components/commons/Flex'
import { colors } from '$styles/colors'
import { typos } from '$styles/typos'
import { ReactNode } from 'react'
import styled from 'styled-components'
import LayoutWrapper from './LayoutWrapper'

const ErrorLayout = ({children}: {children: ReactNode}) => {
    return (
        <LayoutWrapper isWhite>
            <Container>
                {children}
            </Container>
        </LayoutWrapper>
    )
}

const Container = styled(Flex).attrs({
    direction: 'row',
    justifyContent: 'center',
    alignItems: 'center',
})`
    color: ${colors.white};
    ${typos.pretendard['16.26.500']};
    height: calc(100vh - 60px);
    text-align: center;
`

export default ErrorLayout