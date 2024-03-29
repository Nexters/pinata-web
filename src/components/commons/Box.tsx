import {Typo} from '$styles/typos'
import styled, {css, CSSProperties} from 'styled-components'

type BoxProps = {
    backgroundColor?: string
    width?: number | string
    height?: number | string
    padding?: CSSProperties['padding']
    style?: CSSProperties
    typo?: Typo
}

export const Box = styled.div<BoxProps>`
    ${({backgroundColor, width, height, padding, typo}) => css`
        background-color: ${backgroundColor};
        width: ${width !== undefined ? (typeof width === 'number' ? width + 'px' : width) : undefined};
        height: ${height !== undefined ? (typeof height === 'number' ? height + 'px' : height) : undefined};
        padding: ${padding};
        ${typo};
    `}
`
