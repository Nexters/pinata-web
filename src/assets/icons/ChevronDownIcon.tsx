import { IconProps, IconSvg } from '.';

const ChevronDownIcon = ({size, color}: IconProps) => (
    <IconSvg
        size={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m8 11 4.5 4 4.5-4" stroke={color} strokeLinecap="round" />
    </IconSvg>
)
  
  export default ChevronDownIcon