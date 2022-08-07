import styled, {css} from 'styled-components'

export type IconProps = {
    size: number
    color?: string
}

export const IconSvg = styled.svg<{size: number}>`
    ${({size}) => css`
        width: ${size}px;
        height: ${size}px;
    `}
`
