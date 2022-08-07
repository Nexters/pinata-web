import styled, {css, CSSProperties} from 'styled-components'

export type IconProps = {
    size: number
    color?: string
    style?: CSSProperties
}

export const IconSvg = styled.svg<{size: number}>`
    ${({size}) => css`
        width: ${size}px;
        height: ${size}px;
    `}
`
