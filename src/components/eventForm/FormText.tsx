import {Box} from '$components/commons/Box'
import {typos} from '$styles/typos'
import styled from 'styled-components'

const FormText = ({text, isShow}: {text: string; isShow: boolean}) => {
    if (!isShow) {
        return null
    }
    return <Text>{text}</Text>
}

const Text = styled(Box)`
    color: #ff5757;
    padding: 10px 0;
    text-align: left;
    width: 100%;
    ${typos.pretendard['12.12.500']};
`

export default FormText
