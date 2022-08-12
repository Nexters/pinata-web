import { typos } from '$styles/typos';
import styled from 'styled-components';

export const Section = styled.div<{
    marginTop?: number
    marginBottom?: number
}>`
    margin-top: ${({marginTop}) => marginTop || 0}px;
    margin-bottom: ${({marginBottom}) => marginBottom || 0}px;
`

export const SectionTitle = styled.div<{
    marginTop?: number
    marginBottom?: number
}>`
    color: #fff;
    ${typos.pretendard['16.26.700']};
    margin-top: ${({marginTop}) => marginTop || 0}px;
    margin-bottom: ${({marginBottom}) => marginBottom || 0}px;
`