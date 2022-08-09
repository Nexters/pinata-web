import {css, FlattenSimpleInterpolation} from 'styled-components'

const pretendardBase = css`
    font-family: 'Pretendard';
    font-style: normal;
    letter-spacing: -0.0075em;
    font-feature-settings: 'tnum' on, 'lnum' on;
`

export type Typo = FlattenSimpleInterpolation

const createTypo = (base: Typo, size: number, lineHeight: number, weight: number) => css`
    ${base}
    font-weight: ${weight};
    font-size: ${size}px;
    line-height: ${lineHeight}px;
`

export const typos = {
    pretendard: {
        '12.18.400': createTypo(pretendardBase, 12, 18, 400),
        '12.19.600': createTypo(pretendardBase, 12, 19, 600),
        '13.19.400': createTypo(pretendardBase, 13, 19, 400),
        '13.26.500': createTypo(pretendardBase, 13, 26, 500),
        '14.19.400': createTypo(pretendardBase, 14, 19, 400),
        '16.19.700': createTypo(pretendardBase, 16, 19, 700),
        '16.26.700': createTypo(pretendardBase, 16, 26, 700),
        '18.19.700': createTypo(pretendardBase, 18, 19, 700),
        '22.18.700': createTypo(pretendardBase, 22, 18, 700),
        '22.32.700': createTypo(pretendardBase, 22, 32, 700),
    },
} as const
