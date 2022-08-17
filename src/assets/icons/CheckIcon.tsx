import { IconProps, IconSvg } from '.'

const CheckIcon = ({size}: IconProps) => (
    <IconSvg
        size={size}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <circle cx={10} cy={10} r={10} fill="#323235" />
        <path
            d="M5.5 9.794 8.706 13 14 8"
            stroke="#fff"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </IconSvg>
)
  
export default CheckIcon