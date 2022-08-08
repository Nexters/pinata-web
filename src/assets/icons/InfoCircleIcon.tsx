import { IconProps, IconSvg } from '.';

const InfoCircleIcon = ({size, color, style = {}}: IconProps) => (
  <IconSvg
    size={size}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={style}
  >
    <g opacity={0.5}>
      <circle cx={8} cy={8} r={7.5} stroke={color} />
      <circle cx={8} cy={5} r={1} fill={color} />
      <rect x={7.25} y={7} width={1.5} height={5} rx={0.75} fill={color} />
    </g>
  </IconSvg>
);

export default InfoCircleIcon;

