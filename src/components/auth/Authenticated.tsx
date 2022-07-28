import ROUTE from '$constants/route'
import useKakaoLogin from '$hooks/useKakaoLogin'
import {Navigate, Outlet} from 'react-router-dom'

function Authenticated() {
    const {isLogined} = useKakaoLogin()

    return isLogined ? <Outlet /> : <Navigate to={ROUTE.LOGIN} />
}

export default Authenticated
