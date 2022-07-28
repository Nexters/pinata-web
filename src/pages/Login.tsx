import ROUTE from '$constants/route'
import useKakaoLogin from '$hooks/useKakaoLogin'
import {Navigate} from 'react-router-dom'
import Main from './Main'

const Login = () => {
    const {isLogined} = useKakaoLogin()
    if (isLogined) {
        return <Navigate to={ROUTE.MAIN} />
    }
    return <Main />
}

export default Login
