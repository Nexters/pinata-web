import {colors} from '$styles/colors'
import {typos} from '$styles/typos'
import {extractProp} from '$util/common'
import styled from 'styled-components'

export type BadgeProps = {
    text: string
    type: 'danger' | 'default' | 'active'
    marginBottom?: number
    marginLeft?: number
}

const BADGE_COLOR = {
    danger: colors.red[100],
    default: colors.black[100],
    active: colors.blue[100],
}

const Badge = ({text, type, marginBottom = 0, marginLeft = 0}: BadgeProps) => {
    return (
        <BadgeContainer type={type} marginBottom={marginBottom} marginLeft={marginLeft}>
            {text}
        </BadgeContainer>
    )
}

const BadgeContainer = styled.span<Required<Pick<BadgeProps, 'type' | 'marginBottom' | 'marginLeft'>>>`
    border: 1px solid ${({type}) => BADGE_COLOR[type]};
    border-radius: 20px;
    color: ${({type}) => BADGE_COLOR[type]};
    padding: 2px 12px;
    margin-bottom: ${extractProp('marginBottom')}px;
    margin-left: ${extractProp('marginLeft')}px;
    ${typos.pretendard['12.20.500']};
`

export default Badge
