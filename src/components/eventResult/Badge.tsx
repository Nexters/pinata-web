import {typos} from '$styles/typos'
import {extractProp} from '$util/common'
import styled from 'styled-components'

export type BadgeProps = {
    text: string
    type: 'danger' | 'default'
    marginBottom?: number
}

const BADGE_COLOR = {
    danger: '#FF0404',
    default: 'rgba(27, 27, 30, .5)',
}

const Badge = ({text, type, marginBottom = 0}: BadgeProps) => {
    return (
        <BadgeContainer type={type} marginBottom={marginBottom}>
            {text}
        </BadgeContainer>
    )
}

const BadgeContainer = styled.span<{
    type: 'danger' | 'default'
    marginBottom: number
}>`
    border: 1px solid ${({type}) => BADGE_COLOR[type]};
    border-radius: 20px;
    color: ${({type}) => BADGE_COLOR[type]};
    padding: 2px 12px;
    margin-bottom: ${extractProp('marginBottom')}px;
    ${typos.pretendard['12.20.500']};
`

export default Badge
