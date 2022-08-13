import { IconProps } from '.';

const DownloadIcon = ({size, color, style = {}}: IconProps) => (
    <svg
        width={size}
        height={0.75 * size}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox='0 0 16 12'
        style={style}
    >
      <path
        d="M1 6v3a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 6 8 8 6 6M8 7V1"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  
  export default DownloadIcon;