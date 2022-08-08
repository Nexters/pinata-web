import { IconProps, IconSvg } from '.';

const ShareIcon = ({size, color, style = {}}: IconProps) => (
    <IconSvg
    size={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      <g opacity={0.8} stroke={color} strokeWidth={1.25}>
        <path d="M16.25 12.083V15c0 .69-.56 1.25-1.25 1.25H5.833c-.69 0-1.25-.56-1.25-1.25V5.833c0-.69.56-1.25 1.25-1.25H8.75M16.25 9.167V4.583h-4.583M16.238 4.596l-7.071 7.07" />
      </g>
    </IconSvg>
  );
  
  export default ShareIcon;