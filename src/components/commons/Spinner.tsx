import styled, { keyframes } from 'styled-components'

const Spinner = () => {
    return <SpinnerComponent />
}

const rotate = keyframes`
    0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`

const SpinnerComponent = styled.div`
    margin: 0 auto;
    font-size: 8px;
    position: relative;
    text-indent: -9999em;
    border-top: 1.1em solid rgba(255, 255, 255, 0.2);
    border-right: 1.1em solid rgba(255, 255, 255, 0.2);
    border-bottom: 1.1em solid rgba(255, 255, 255, 0.2);
    border-left: 1.1em solid #ffffff;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-animation: load8 1.1s infinite linear;
    animation: ${rotate} 1.1s infinite linear;

    border-radius: 50%;
    width: 50px;
    height: 50px;

    &:after {
        border-radius: 50%;
        width: 50px;
        height: 50px;
    }
`

export default Spinner