import {useCookies} from 'react-cookie'

const useAuthToken = () => {
    const [cookies] = useCookies<string, {
        pln: string
    }>(['pln'])

    const token = cookies.pln
    return token
}

export default useAuthToken