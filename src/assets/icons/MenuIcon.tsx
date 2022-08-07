import {IconProps, IconSvg} from '.'

const MenuIcon = ({size, color}: IconProps) => (
    <IconSvg size={size} viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect y={14} width={18} height={2.5} rx={1.25} fill={color} />
        <rect y={7} width={18} height={2.5} rx={1.25} fill={color} />
        <rect width={18} height={2.5} rx={1.25} fill={color} />
    </IconSvg>
)

export default MenuIcon
