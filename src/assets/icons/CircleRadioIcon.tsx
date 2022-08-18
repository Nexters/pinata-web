import { IconProps, IconSvg } from '.';

const CircleRadioIcon = ({size, color}: IconProps) => (
    <IconSvg
    size={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle opacity={0.5} cx={15} cy={15} r={7.5} stroke={color} />
    </IconSvg>
)
  
  export default CircleRadioIcon