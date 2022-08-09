import {IconProps, IconSvg} from '.'

const PlusIcon = ({size, color}: IconProps) => (
    <IconSvg size={size} viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity={0.5} fill={color}>
            <rect y={8.25} width={19} height={2} rx={1} />
            <rect x={8.25} y={19} width={19} height={2} rx={1} transform="rotate(-90 8.25 19)" />
        </g>
    </IconSvg>
)

export default PlusIcon
