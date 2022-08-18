import React from 'react'
import styled from 'styled-components'

import {Box} from '$components/commons/Box'
import {typos} from '$styles/typos'
import {useNavigate} from 'react-router-dom'
import ROUTE from '$constants/route'

import Flex from '$components/commons/Flex'
import Overlay from '$components/eventResult/Overlay'
import EventWrapper from './EventWrapper'

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

const InvalidCode = () => {
    const navigate = useNavigate()
    return (
        <EventWrapper>
            <Flex direction="row" justifyContent="center" alignItems="center">
                <Container>
                    <Box>
                        유효하지 않은
                        <br />
                        이벤트입니다.
                    </Box>
                    <Button onClick={() => navigate(ROUTE.MAIN, {replace: true})}>홈으로 돌아가기</Button>
                </Container>
            </Flex>
        </EventWrapper>
    )
}

export default InvalidCode
