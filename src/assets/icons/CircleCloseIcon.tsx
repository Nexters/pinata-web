import {IconProps, IconSvg} from '.'

const CircleCloseIcon = ({size}: IconProps) => (
    <IconSvg size={size} fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx={12} cy={12} r={9} fill="#555" fillOpacity={0.1} />
        <path stroke="#fff" strokeLinecap="round" d="m15.15 8.857-6.293 6.292M15.143 15.149 8.85 8.857" />
    </IconSvg>
)

export default CircleCloseIcon
