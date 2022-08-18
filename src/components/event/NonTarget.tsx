import {Box} from '$components/commons/Box'
import Flex from '$components/commons/Flex'
import ROUTE from '$constants/route'
import {typos} from '$styles/typos'
import {useNavigate} from 'react-router-dom'
import styled from 'styled-components'
import EventWrapper from './EventWrapper'

const NonTarget = () => {
    const navigate = useNavigate()

    return (
        <EventWrapper>
            <Flex direction="row" justifyContent="center" alignItems="center">
                <Container>
                    <Box>
                        이벤트 참여 대상이
                        <br />
                        아닙니다.
                    </Box>
                    <Button onClick={() => navigate(ROUTE.MAIN, {replace: true})}>홈으로 돌아가기</Button>
                </Container>
            </Flex>
        </EventWrapper>
    )
}

const Button = styled.button`
    width: 180px;
    height: 50px;
    background: #ffffff;
    border-radius: 50px;
    border: none;
    outline: none;
    margin-top: 40px;
    text-align: center;
    color: #1b1b1e;
    cursor: pointer;
    ${typos.pretendard['16.19.600']};
`

const Container = styled(Box)`
    text-align: center;
    font-style: normal;
    ${typos.pretendard['25.38.800']};
    color: #ffffff;
    z-index: 1;
`

export default NonTarget
