import { IconProps, IconSvg } from '.';

const CircleFilledRadioIcon = ({size, color}: IconProps) => (
    <IconSvg
        size={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx={15} cy={15} r={8} fill={color} />
      <circle cx={15} cy={15} r={3} fill="#fff" />
    </IconSvg>
  );
  
  export default CircleFilledRadioIcon;