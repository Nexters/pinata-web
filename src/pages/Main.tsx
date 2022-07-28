import ROUTE from '$constants/route'
import useKakaoLogin from '$hooks/useKakaoLogin'
import React from 'react'
import {Link} from 'react-router-dom'

const Main: React.FC = () => {
    const {login, logout, isLogined} = useKakaoLogin()
    return (
        <div className="App">
            <h1>Main Page</h1>
            <Link to={ROUTE.GIFTS}>Gift</Link>
            <Link to={ROUTE.EVENT.LIST}>Event List</Link>
            <button onClick={isLogined ? logout : login}>{isLogined ? '로그아웃' : '카카오 로그인'}</button>
        </div>
    )
}

export default Main
