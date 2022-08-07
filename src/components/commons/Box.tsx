import styled, {css, CSSProperties} from 'styled-components'

type BoxProps = {
    backgroundColor?: string
    width?: number | string
    height?: number | string
    padding?: CSSProperties['padding']
}

export const Box = styled.div<BoxProps>`
    ${({backgroundColor, width, height, padding}) => css`
        background-color: ${backgroundColor};
        width: ${width !== undefined ? width + 'px' : undefined};
        height: ${height !== undefined ? height + 'px' : undefined};
        padding: ${padding};
    `}
`
