import PinataImage from '$assets/image/PinataImage'
import {Box} from '$components/commons/Box'
import Flex from '$components/commons/Flex'
import ROUTE from '$constants/route'
import useKakaoLogin from '$hooks/useKakaoLogin'
import {Navigate} from 'react-router-dom'
import styled from 'styled-components'

const Login = () => {
    const {isLogined, login} = useKakaoLogin()
    if (isLogined) {
        return <Navigate to={ROUTE.MAIN} />
    }
    return (
        <LoginWrapper>
            <PinataImage
                size={330}
                style={{
                    position: 'fixed',
                    top: 0,
                }}
            />
            <Container>
                <Box>
                    누구나 쉽게 이벤트 만들고
                    <br />
                    모두 함께 참여해요.
                </Box>
                <Button onClick={login}>카카오로 로그인</Button>
            </Container>
        </LoginWrapper>
    )
}

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
    background-color: #32aaff;
    background-image: url(${require('$assets/image/need-login-background.png')});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`

const Container = styled(Box)`
    text-align: center;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 35px;
    color: #ffffff;
    z-index: 1;
`

export default Login
