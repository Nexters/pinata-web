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
        '12.20.500': createTypo(pretendardBase, 12, 20, 500),
        '13.19.400': createTypo(pretendardBase, 13, 19, 400),
        '13.26.500': createTypo(pretendardBase, 13, 26, 500),
        '14.19.400': createTypo(pretendardBase, 14, 19, 400),
        '14.32.500': createTypo(pretendardBase, 14, 32, 500),
        '14.26.500': createTypo(pretendardBase, 14, 26, 500),
        '14.20.600': createTypo(pretendardBase, 14, 20, 600),
        '14.26.700': createTypo(pretendardBase, 14, 26, 700),
        '15.32.500': createTypo(pretendardBase, 15, 32, 500),
        '16.19.700': createTypo(pretendardBase, 16, 19, 700),
        '16.26.500': createTypo(pretendardBase, 16, 26, 500),
        '16.26.700': createTypo(pretendardBase, 16, 26, 700),
        '16.32.600': createTypo(pretendardBase, 16, 32, 600),
        '18.19.700': createTypo(pretendardBase, 18, 19, 700),
        '22.18.700': createTypo(pretendardBase, 22, 18, 700),
        '22.32.700': createTypo(pretendardBase, 22, 32, 700),
    },
} as const
