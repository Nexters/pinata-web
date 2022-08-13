import {Box} from '$components/commons/Box'
import Flex from '$components/commons/Flex'
import ROUTE from '$constants/route'
import useKakaoLogin from '$hooks/useKakaoLogin'
import LayoutWrapper from '$layout/LayoutWrapper'
import { typos } from '$styles/typos'
import { getImageSource } from '$util/imageHelper'
import {Navigate} from 'react-router-dom'
import styled from 'styled-components'

const Login = () => {
    const {isLogined, login} = useKakaoLogin()
    if (isLogined) {
        return <Navigate to={ROUTE.MAIN} />
    }
    return (
        <LoginWrapper>
            <LayoutWrapper isWhite>
                <Container>
                    <PinataImage />
                    <Box>
                        누구나 쉽게 이벤트 만들고
                        <br />
                        모두 함께 참여해요.
                    </Box>
                    <Button onClick={login}>카카오로 로그인</Button>
                </Container>
            </LayoutWrapper>
        </LoginWrapper>
    )
}

const PinataImage = styled.div`
    background: url(${getImageSource('images/pinata-image.png')});
    width: 181px;
    height: 129px;
    margin-bottom: 120px;
`

const Button = styled.button`
    width: 180px;
    height: 50px;
    background: #f6e24b;
    color: #1b1b1e;
    border-radius: 50px;
    border: none;
    outline: none;
    margin-top: 18px;
    font-weight: 600;
    font-size: 16px;
    text-align: center;
    cursor: pointer;
`

const LoginWrapper = styled(Flex).attrs({
    direction: 'column',
    justifyContent: 'center',
    alignItems: 'center',
})`
    height: 100%;
    width: 100%;
    background-color: #1B1B1E;
    position: relative;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`

const Container = styled(Flex).attrs({
    direction: 'column',
    justifyContent: 'center',
    alignItems: 'center'
})`
    text-align: center;
    font-style: normal;
    color: #ffffff;
    z-index: 1;
    ${typos.pretendard['24.35.700']};
`

export default Login
