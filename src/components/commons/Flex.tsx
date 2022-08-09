import styled, {CSSProperties} from 'styled-components'
import {Box} from './Box'

type FlexProps = {
    direction: CSSProperties['flexDirection']
    justifyContent?: CSSProperties['justifyContent']
    alignItems?: CSSProperties['alignItems']
}

const Flex = styled(Box)<FlexProps>`
    display: flex;
    flex-direction: ${({direction = 'column'}) => direction};
    justify-content: ${({justifyContent = 'flex-start'}) => justifyContent};
    align-items: ${({alignItems = 'center'}) => alignItems};
`

export default Flex
