import { IconProps, IconSvg } from '.'

const CircleConfirmOnIcon = ({ size, color = '#19171C' }: IconProps) => {
    return (
        <IconSvg size={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 16C3 8.8203 8.8203 3 16 3C23.1797 3 29 8.8203 29 16C29 23.1797 23.1797 29 16 29C8.8203 29 3 23.1797 3 16ZM22.2372 13.3115C22.6104 12.9044 22.5828 12.2718 22.1757 11.8986C21.7686 11.5254 21.136 11.5529 20.7629 11.96L14.1667 19.1559L11.2372 15.96C10.864 15.5529 10.2314 15.5254 9.82428 15.8986C9.41716 16.2718 9.38966 16.9044 9.76285 17.3115L13.4295 21.3115C13.6189 21.5181 13.8864 21.6357 14.1667 21.6357C14.447 21.6357 14.7144 21.5181 14.9038 21.3115L22.2372 13.3115Z"
                fill={color}
            />
        </IconSvg>
    )
}

export default CircleConfirmOnIcon
