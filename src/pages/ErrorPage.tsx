import Flex from '$components/commons/Flex'
import LayoutWrapper from '$layout/LayoutWrapper'
import { colors } from '$styles/colors'
import { typos } from '$styles/typos'
import styled from 'styled-components'

const ErrorPage = () => {
    return <LayoutWrapper isWhite>
        <Container>
        서버에서 알 수 없는 에러가
        <br />
        발생했습니다.
        </Container>
        </LayoutWrapper>
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

export default ErrorPage
