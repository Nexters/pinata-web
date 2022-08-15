import styled from 'styled-components'

const ORANGE_COLOR = '#F18D4D'
const GREEN_COLOR = '#2BB68C'
const WHITE_COLOR = '#FFFFFF'
const PINK_COLOR = '#FF93C7'
const BLUE_COLOR = '#60B3FF'

const Wrapper = styled.div`
    position: absolute;

    z-index: -50;
    opacity: 0;
    transition: 1s linear;

    left: calc(50% - 62px);
    &.move {
        opacity: 1;
    }
`

type Figure = {
    color: string
}

type Movement = {
    children: React.ReactNode
    isGo: boolean
    rotate: number
}

const MoveWrapper = styled.div<{rotate: number}>`
    width: 100px;
    height: 100px;
    position: absolute;
    top: 20px;
    left: 15px;

    transform: rotate(${(props) => props.rotate}deg);

    div {
        transition: 1s ease-out;
    }

    .move {
        margin-left: 200px;
    }

    svg {
        display: block;
        margin: auto;
    }
`

const LineMove: React.FC<Movement> = ({children, isGo, rotate}) => {
    return (
        <MoveWrapper rotate={rotate}>
            <div className={isGo ? 'move' : ''}>{children}</div>
        </MoveWrapper>
    )
}

const Star: React.FC<Figure> = ({color}) => {
    return (
        <svg overflow="visible" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M41.5622 5.44952L41.9693 19.0151C42.0354 21.1635 43.4553 23.0124 45.4906 23.5961L58.3479 27.2839C62.9 28.5896 63.0939 35.0502 58.6305 36.7131L46.028 41.409C44.0312 42.1522 42.7282 44.11 42.7893 46.257L43.1964 59.8226C43.3394 64.625 37.336 66.8618 34.4375 63.0873L26.2401 52.4255C24.9407 50.7369 22.7118 50.0975 20.7199 50.8422L8.11749 55.5381C3.65409 57.2009 -0.24604 52.1236 2.4207 48.127L9.95628 36.8397C11.1511 35.0528 11.079 32.7006 9.77965 31.012L1.58221 20.3501C-1.32121 16.5742 2.27257 11.2001 6.81975 12.5043L19.677 16.1921C21.7123 16.7759 23.8963 15.9608 25.0911 14.174L32.6267 2.88658C35.2934 -1.10993 41.4192 0.647105 41.5622 5.44952Z"
                fill={color}
            />
        </svg>
    )
}

const Triangle: React.FC<Figure> = ({color}) => {
    return (
        <svg overflow="visible" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M36.2557 17.8746C38.8205 19.2992 38.9099 22.9555 36.4179 24.5037L7.10942 42.7122C4.58313 44.2818 1.3076 42.5126 1.23489 39.5394L0.379949 4.57663C0.307244 1.60338 3.49238 -0.323748 6.09237 1.12041L36.2557 17.8746Z"
                fill={color}
            />
        </svg>
    )
}

const Stick: React.FC<Figure> = ({color}) => {
    return (
        <svg overflow="visible" xmlns="http://www.w3.org/2000/svg">
            <rect x="50" y="10" rx="10" width={100} height={10} fill={color} />
        </svg>
    )
}

const Circle: React.FC<Figure> = ({color}) => {
    return (
        <svg overflow="visible" xmlns="http://www.w3.org/2000/svg">
            <rect width="75" height="75" rx="40" fill={color} />
        </svg>
    )
}

export const Particles: React.FC<{isOpen: boolean}> = ({isOpen}) => {
    return (
        <Wrapper className={isOpen ? 'move' : ''}>
            <LineMove isGo={isOpen} rotate={8}>
                <Star color={ORANGE_COLOR} />
            </LineMove>
            <LineMove isGo={isOpen} rotate={90}>
                <Circle color={WHITE_COLOR} />
            </LineMove>
            <LineMove isGo={isOpen} rotate={60}>
                <Triangle color={PINK_COLOR} />
            </LineMove>
            <LineMove isGo={isOpen} rotate={154}>
                <Stick color={PINK_COLOR} />
            </LineMove>
            <LineMove isGo={isOpen} rotate={175}>
                <Circle color={BLUE_COLOR} />
            </LineMove>
            <LineMove isGo={isOpen} rotate={137}>
                <Star color={GREEN_COLOR} />
            </LineMove>
            <LineMove isGo={isOpen} rotate={304}>
                <Star color={GREEN_COLOR} />
            </LineMove>
            <LineMove isGo={isOpen} rotate={339}>
                <Circle color={BLUE_COLOR} />
            </LineMove>
            <LineMove isGo={isOpen} rotate={210}>
                <Star color={ORANGE_COLOR} />
            </LineMove>
            <LineMove isGo={isOpen} rotate={224}>
                <Stick color={GREEN_COLOR} />
            </LineMove>
            <LineMove isGo={isOpen} rotate={264}>
                <Stick color={ORANGE_COLOR} />
            </LineMove>
            <LineMove isGo={isOpen} rotate={240}>
                <Triangle color={GREEN_COLOR} />
            </LineMove>
            <LineMove isGo={isOpen} rotate={310}>
                <Stick color={WHITE_COLOR} />
            </LineMove>
            <LineMove isGo={isOpen} rotate={41}>
                <Stick color={BLUE_COLOR} />
            </LineMove>
        </Wrapper>
    )
}
