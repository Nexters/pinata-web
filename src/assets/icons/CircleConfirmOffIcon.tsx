import { IconProps, IconSvg } from '.'

const CircleConfirmOffIcon = ({ size, color = '#19171C' }: IconProps) => {
    return (
        <IconSvg size={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16 5C9.92487 5 5 9.92487 5 16C5 22.0751 9.92487 27 16 27C22.0751 27 27 22.0751 27 16C27 9.92487 22.0751 5 16 5ZM3 16C3 8.8203 8.8203 3 16 3C23.1797 3 29 8.8203 29 16C29 23.1797 23.1797 29 16 29C8.8203 29 3 23.1797 3 16Z"
                fill={color}
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M22.1757 11.8986C22.5828 12.2718 22.6104 12.9044 22.2372 13.3115L14.9038 21.3115C14.7144 21.5181 14.447 21.6357 14.1667 21.6357C13.8864 21.6357 13.6189 21.5181 13.4295 21.3115L9.76285 17.3115C9.38966 16.9044 9.41716 16.2718 9.82428 15.8986C10.2314 15.5254 10.864 15.5529 11.2372 15.96L14.1667 19.1559L20.7629 11.96C21.136 11.5529 21.7686 11.5254 22.1757 11.8986Z"
                fill={color}
            />
        </IconSvg>
    )
}

export default CircleConfirmOffIcon
