import styled, {CSSProperties} from 'styled-components'

type FlexProps = {
    direction: CSSProperties['flexDirection']
    justifyContent: CSSProperties['justifyContent']
    alignItems: CSSProperties['alignItems']
}

const Flex = styled.div<FlexProps>`
    display: flex;
    flex-direction: ${({direction = 'column'}) => direction};
    justify-content: ${({justifyContent = 'flex-start'}) => justifyContent};
    align-items: ${({alignItems = 'center'}) => alignItems};
`

export default Flex
