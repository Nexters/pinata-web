import Flex from '$components/commons/Flex'
import styled from 'styled-components'
import {colors} from '$styles/colors'
import {typos} from '$styles/typos'

export const Empty = styled(Flex).attrs({
    direction: 'column',
    justifyContent: 'center',
})`
    width: calc(100% - 40px);
    height: 158px;
    margin: 0 auto;
    background: ${colors.black[300]};
    color: ${colors.white};
    opacity: 0.4;
    ${typos.pretendard['14.26.500']};
    border-radius: 20px;
`
