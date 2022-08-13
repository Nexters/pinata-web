import {IconProps, IconSvg} from '.'

const CloseIcon = ({size, color = '#1B1B1E', style={}}: IconProps) => (
    <IconSvg size={size} viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg" style={style}>
        <path d="M20 6.364 7.272 19.092M7.272 6.364 20 19.092" stroke={color} strokeWidth={1.5} strokeLinecap="round" />
    </IconSvg>
)

export default CloseIcon
