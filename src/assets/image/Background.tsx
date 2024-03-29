import styled from 'styled-components'

const Wrapper = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 543px;

    overflow-y: hidden;

    .pebble-fast {
        path {
            transform-origin: 50% 100%;
            animation-name: move-pebble-fast;
            animation-duration: 5s;
            animation-timing-function: ease-in-out;
            animation-direction: alternate;
            animation-iteration-count: infinite;
        }
    }

    .pebble-middle {
        path {
            transform-origin: 50% 100%;
            animation-name: move-pebble-fast;
            animation-duration: 6s;
            animation-timing-function: ease-in-out;
            animation-direction: alternate;
            animation-iteration-count: infinite;
        }
    }

    .pebble-slow {
        path {
            transform-origin: 50% 100%;
            animation-name: move-pebble-slow;
            animation-duration: 7s;
            animation-timing-function: ease-in-out;
            animation-direction: alternate;
            animation-iteration-count: infinite;
        }
    }

    @keyframes move-pebble-fast {
        0% {
            transform: translate(0%, calc(0% - 15px)) rotate(-5deg);
        }
        50% {
            transform: translate(0%, 0%) rotate(0deg);
        }
        100% {
            transform: translate(0%, calc(0% - 15px)) rotate(-5deg);
        }
    }

    @keyframes move-pebble-middle {
        0% {
            transform: translate(0%, calc(0% - 10px)) rotate(-5deg);
        }
        50% {
            transform: translate(0%, 0%) rotate(0deg);
        }
        100% {
            transform: translate(0%, calc(0% - 10px)) rotate(-5deg);
        }
    }

    @keyframes move-pebble-slow {
        0% {
            transform: translate(0%, calc(0% - 5px)) rotate(-5deg);
        }
        50% {
            transform: translate(0%, 0%) rotate(0deg);
        }
        100% {
            transform: translate(0%, calc(0% - 5px)) rotate(-5deg);
        }
    }
`

const Background = () => (
    <Wrapper>
        <svg overflow={'visible'} width={'100%'} height={543} fill="none" xmlns="http://www.w3.org/2000/svg">
            <svg
                overflow={'visible'}
                x={189}
                y={30}
                width={200}
                height={160}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="pebble-fast">
                <path
                    d="M135.228 1.24328C115.332 3.17939 94.9434 6.6253 79.5512 12.6258C15.2605 37.6891 -10.8141 80.9083 5.68612 123.234C22.1863 165.559 66.1276 181.483 124.787 158.615C128.354 157.224 131.846 155.643 135.244 154.099C135.901 153.843 136.558 153.587 137.084 153.272C140.257 151.705 143.431 150.139 146.53 148.381C147.187 148.125 147.676 147.715 148.296 147.364C151.395 145.606 154.457 143.754 157.388 141.843L157.481 141.806C160.412 139.895 163.081 137.866 165.75 135.837C166.239 135.427 166.765 135.112 167.254 134.702C169.829 132.71 172.273 130.659 174.68 128.513C175.168 128.102 175.563 127.729 176.052 127.319C178.422 125.077 180.792 122.835 183.03 120.535L183.218 120.462C185.326 118.103 187.433 115.744 189.41 113.326C189.768 112.857 190.163 112.483 190.521 112.014C192.403 109.633 194.192 107.289 195.813 104.79C196.171 104.321 196.491 103.757 196.849 103.288C226.776 57.4689 189.928 -4.04805 135.322 1.20668L135.228 1.24328Z"
                    fill="#73BCFF"
                />
            </svg>
            <svg className="pebble-middle">
                <path
                    d="M48.42 160.852c-12.652-.476-25.456.332-34.748 3.954-38.81 15.13-50.91 50.56-35.578 89.887 15.331 39.328 45.498 58.28 80.91 44.475 2.153-.839 4.236-1.855 6.264-2.85.396-.154.793-.309 1.098-.53 1.88-1.039 3.76-2.078 5.57-3.294.396-.154.667-.464 1.03-.707a71.818 71.818 0 0 0 5.27-3.892l.057-.022c1.684-1.371 3.187-2.875 4.689-4.379.27-.309.576-.53.847-.84a65.672 65.672 0 0 0 4.12-4.667c.27-.31.485-.598.756-.907 1.285-1.726 2.57-3.451 3.765-5.243l.113-.045c1.103-1.858 2.206-3.717 3.218-5.642.18-.376.394-.663.574-1.039.955-1.903 1.853-3.784 2.626-5.82.18-.376.325-.841.505-1.217 14.303-37.31-16.3-95.886-51.03-97.244l-.056.022Z"
                    fill="#FF9ACA"
                />
            </svg>
            <svg className="pebble-slow">
                <path
                    d="M222.551 238.041c-6.772-6.072-14.214-11.764-21-14.828-28.342-12.797-51.189-5.993-60.66 14.984-9.47 20.976-1.451 41.716 24.409 53.392 1.572.71 3.187 1.325 4.76 1.922.29.131.58.262.849.326 1.512.513 3.025 1.025 4.579 1.442.29.131.581.149.892.232 1.555.418 3.131.788 4.687 1.093l.041.018c1.556.305 3.072.477 4.588.65.291.018.561.082.852.1a57.55 57.55 0 0 0 4.405.283c.291.017.54.016.831.034 1.497-.007 2.995-.013 4.472-.086l.083.038c1.457-.139 2.914-.277 4.351-.481.271-.049.52-.05.791-.098 1.396-.223 2.75-.464 4.106-.819.271-.049.563-.144.834-.192 24.922-6.436 34.738-41.305 16.171-57.992l-.041-.018Z"
                    fill="#F18D4D"
                />
            </svg>
            <svg className="pebble-middle">
                <path
                    d="M432.301 211.943c-26.466 1.773-53.511 5.708-73.753 13.599-84.548 32.96-117.128 94.183-92.906 156.314 24.221 62.131 83.717 87.458 160.859 57.385 4.69-1.828 9.271-3.937 13.729-5.997.864-.337 1.728-.673 2.414-1.102 4.156-2.104 8.313-4.208 12.36-6.592.864-.336 1.495-.905 2.305-1.382a204.914 204.914 0 0 0 11.854-7.523l.124-.048c3.814-2.615 7.273-5.415 10.732-8.214.631-.568 1.317-.997 1.949-1.566a168.58 168.58 0 0 0 9.595-8.576c.631-.569 1.139-1.089 1.771-1.658 3.048-3.123 6.096-6.245 8.966-9.46l.247-.096c2.692-3.306 5.385-6.613 7.899-10.011.453-.66.961-1.181 1.415-1.841 2.391-3.35 4.658-6.652 6.693-10.186.453-.66.852-1.461 1.306-2.121 37.589-64.787-14.795-155.756-87.435-150.974l-.124.049Z"
                    fill="#3FBF89"
                />
            </svg>
            <svg className="pebble-fast">
                <path
                    d="M294.101 360.551c-10.277-10.7-21.675-20.933-32.294-26.958-44.354-25.166-81.927-18.835-99.433 12.018s-6.776 64.591 33.692 87.553c2.461 1.396 5 2.653 7.475 3.873.453.257.906.515 1.334.666 2.384 1.077 4.769 2.154 7.232 3.093.454.257.921.338 1.414.526 2.463.939 4.966 1.807 7.443 2.57l.065.037c2.478.763 4.904 1.313 7.331 1.863.468.081.895.232 1.363.314a97.98 97.98 0 0 0 7.075 1.258c.467.082.87.127 1.337.208 2.416.268 4.831.537 7.222.699l.129.073c2.365.056 4.73.112 7.07.061.442-.024.845.02 1.287-.004 2.274-.088 4.485-.211 6.709-.511.442-.025.923-.119 1.365-.144 40.882-5.372 60.421-57.761 32.249-87.158l-.065-.037Z"
                    fill="#EEEDEA"
                />
            </svg>
            <path d="M0 304h187v239H0V304Z" fill="#3FBF89" />
            <path d="M0 304h187v-33H0v33Z" fill="#5DD7A4" />
            <path d="M77 543h33V271H77v272Z" fill="#1DA46B" />
            <path d="M77 304h33v-33H77v33Z" fill="#21B778" />
            <path
                d="M190.804 421.103s-21.337 2.579-27.907-2.362c-6.571-4.942-7.891-14.274-2.95-20.844 4.941-6.571 14.273-7.891 20.844-2.95 6.57 4.941 10.013 26.156 10.013 26.156Z"
                fill="#FD95C7"
            />
            <path
                d="M183.77 421.103s21.337 2.579 27.908-2.362c6.57-4.942 7.891-14.274 2.949-20.844-4.941-6.571-14.273-7.891-20.843-2.95-6.571 4.941-10.014 26.156-10.014 26.156Z"
                fill="#FD95C7"
            />
            <path
                d="M188.859 420.684s-9.534 1.153-12.469-1.055a6.65 6.65 0 1 1 7.995-10.631c2.935 2.207 4.474 11.686 4.474 11.686Z"
                fill="#FB7AB8"
            />
            <path
                d="M185.716 420.684s9.533 1.153 12.469-1.055a6.65 6.65 0 1 0-7.995-10.631c-2.936 2.207-4.474 11.686-4.474 11.686Z"
                fill="#FB7AB8"
            />
            <path
                d="M143 460c0-5.523 4.477-10 10-10h148c5.523 0 10 4.477 10 10v73c0 5.523-4.477 10-10 10H153c-5.523 0-10-4.477-10-10v-73Z"
                fill="#FF9ACA"
            />
            <path opacity={0.2} d="M153 450h158v71.5L153 450Z" fill="#FF3797" />
            <path
                d="M143 429c0-5.523 4.477-10 10-10h129c5.523 0 10 4.477 10 10v11c0 5.523-4.477 10-10 10H153c-5.523 0-10-4.477-10-10v-11Z"
                fill="#FFB0D6"
            />
            <path opacity={0.8} d="M179 419h17v31h-17v-31Z" fill="#FB7AB8" />
            <path d="M179 450h17v93h-17v-93Z" fill="#FF6AB2" />
            <svg
                width="369"
                height="138"
                x={250}
                y={405}
                viewBox="0 0 348 138"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0H337V138H12V0Z" fill="#73BCFF" />
                <mask
                    id="mask0_418_5020"
                    style={{
                        maskType: 'alpha',
                    }}
                    maskUnits="userSpaceOnUse"
                    x="12"
                    y="0"
                    width="325"
                    height="138">
                    <path d="M12 0H337V138H12V0Z" fill="#73BCFF" />
                </mask>
                <g mask="url(#mask0_418_5020)">
                    <g opacity="0.2" filter="url(#filter0_d_418_5020)">
                        <path d="M12 29H337V100L12 29Z" fill="#3597F0" />
                    </g>
                </g>
                <path
                    d="M0 5C0 2.23858 2.23858 0 5 0H343C345.761 0 348 2.23858 348 5V24C348 26.7614 345.761 29 343 29H5C2.23858 29 0 26.7614 0 24V5Z"
                    fill="#99CEFF"
                />
                <path d="M0 10H348V24C348 26.7614 345.761 29 343 29H5C2.23858 29 0 26.7614 0 24V10Z" fill="#83C3FF" />
                <defs>
                    <filter
                        id="filter0_d_418_5020"
                        x="8"
                        y="29"
                        width="333"
                        height="79"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_418_5020" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_418_5020" result="shape" />
                    </filter>
                </defs>
            </svg>
        </svg>
    </Wrapper>
)

export default Background
