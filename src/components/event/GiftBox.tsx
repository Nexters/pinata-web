import styled from 'styled-components'

const Wrapper = styled.div`
    svg.giftbox-top g {
        transform-origin: center center;
        animation-name: giftbox-move-top;
        animation-duration: 1s;
        animation-timing-function: ease-in-out;
        animation-direction: alternate;
        animation-iteration-count: infinite;
    }

    svg.giftbox-bottom g {
        transform-origin: center center;
        animation-name: giftbox-move-bottom;
        animation-duration: 1s;
        animation-timing-function: linear;
        /* animation-direction: alternate; */
        animation-iteration-count: infinite;
    }

    @keyframes giftbox-move-top {
        0% {
            transform: translate(0%, calc(0% - 5px)) rotate(-3deg);
        }
        25% {
            transform: translate(0%, 0%) rotate(0deg);
        }
        50% {
            transform: translate(0%, calc(0% - 5px)) rotate(3deg);
        }
        75% {
            transform: translate(0%, 0%) rotate(0deg);
        }
        100% {
            transform: translate(0%, calc(0% - 5px)) rotate(-3deg);
        }
    }

    @keyframes giftbox-move-bottom {
        50% {
            transform: translate(0%, calc(0% + 5px));
        }
        75% {
            transform: translate(0%, calc(0% - 3px));
        }
        100% {
            transform: translate(0%, 0%);
        }
    }
`

export const GiftBox = () => {
    // const color = '#FF6AB2'
    return (
        <Wrapper>
            <svg overflow="visible" width="123" height="110" viewBox="0 0 123 110">
                <svg
                    className="giftbox-bottom"
                    y={30}
                    overflow="visible"
                    width="123"
                    height="68"
                    viewBox="0 0 109 68"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <path
                            d="M0 0H109V63C109 65.7614 106.761 68 104 68H5C2.23858 68 0 65.7614 0 63V0Z"
                            fill="#FF9ACA"
                        />
                        <path opacity="0.2" d="M0 0H109V12V34L0 0Z" fill="#FF3797" />
                        <path d="M48 0H60V68H48V0Z" fill="#FF6AB2" />
                    </g>
                </svg>
                <svg
                    y={-10}
                    overflow="visible"
                    className="giftbox-top"
                    width="123"
                    height="42"
                    viewBox="0 0 123 42"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <path
                            d="M63.8532 26.3273C63.8532 26.3273 47.8504 28.2614 42.9225 24.5554C37.9947 20.8495 37.0042 13.8504 40.7102 8.92259C44.4161 3.99478 51.4152 3.00427 56.343 6.71023C61.2708 10.4162 63.8532 26.3273 63.8532 26.3273Z"
                            fill="#FD95C7"
                        />
                        <path
                            d="M58.5775 26.3273C58.5775 26.3273 74.5803 28.2614 79.5081 24.5554C84.4359 20.8495 85.4264 13.8504 81.7205 8.92259C78.0145 3.99478 71.0155 3.00427 66.0877 6.71023C61.1598 10.4162 58.5775 26.3273 58.5775 26.3273Z"
                            fill="#FD95C7"
                        />
                        <path
                            d="M62.3943 26.0132C62.3943 26.0132 55.2441 26.8774 53.0423 25.2216C50.8405 23.5657 50.398 20.4385 52.0538 18.2367C53.7097 16.0349 56.8369 15.5923 59.0387 17.2482C61.2405 18.904 62.3943 26.0132 62.3943 26.0132Z"
                            fill="#FB7AB8"
                        />
                        <path
                            d="M60.0366 26.0132C60.0366 26.0132 67.1868 26.8774 69.3886 25.2216C71.5904 23.5657 72.0329 20.4385 70.3771 18.2367C68.7212 16.0349 65.594 15.5923 63.3922 17.2482C61.1904 18.904 60.0366 26.0132 60.0366 26.0132Z"
                            fill="#FB7AB8"
                        />
                        <path
                            d="M0 30C0 27.2386 2.23858 25 5 25H118C120.761 25 123 27.2386 123 30V37C123 39.7614 120.761 42 118 42H5C2.23858 42 0 39.7614 0 37V30Z"
                            fill="#FFB0D6"
                        />
                        <path opacity="0.8" d="M55 25H67V42H55V25Z" fill="#FB7AB8" />
                    </g>
                </svg>
            </svg>
        </Wrapper>
    )
}
