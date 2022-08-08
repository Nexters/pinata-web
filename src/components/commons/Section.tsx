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
    color: #121212;
    font-weight: 700;
    font-size: 16px;
    line-height: 26px;
    margin-top: ${({marginTop}) => marginTop || 0}px;
    margin-bottom: ${({marginBottom}) => marginBottom || 0}px;
`