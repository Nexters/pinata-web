import {useCallback, useEffect, useMemo} from 'react'
import {useCookies} from 'react-cookie'
import {LoginResponse, useLogin} from '$api/login'
import ROUTE from '$constants/route'
import { useLocation } from 'react-router-dom'

// const ONE_DAY = 24 * 60 * 60
const TWO_HOURS = 2 * 60 * 60

const useKakaoLogin = () => {
    const [cookies, setCookie, removeCookie] = useCookies(['pln'])
    const {callLogin, data, isLoading} = useLogin()
    const isInitialized = window.Kakao.isInitialized()

    const setTokenToCookie = useCallback((data: LoginResponse) => {
        const currentTime = new Date()
        setCookie('pln', data.accessToken, {
            path: '/',
            expires: new Date(currentTime.setSeconds(currentTime.getSeconds() + TWO_HOURS)),
        })
    }, [setCookie])

    useEffect(() => {
        if (!isLoading && !!data?.accessToken) {
            setTokenToCookie(data)
        }
    }, [setTokenToCookie, data, isLoading])

    const login = () => {
        if (!isInitialized) {
            throw new Error('Kakao Login should be initialized.')
        }

        window.Kakao.Auth.login({
            success: function () {
                window.Kakao.API.request({
                    url: '/v2/user/me',
                    success: async function (profile: any) {
                        const {accessToken} = await callLogin({
                            providerId: profile.id,
                            email: profile.kakao_account.email,
                            nickname: profile.kakao_account.profile.nickname,
                            profileImageUrl: profile.kakao_account.profile.thumbnail_image_url,
                        })

                        console.log(accessToken)
                    },
                    fail: function (error: Error) {
                        console.log(error)
                        window.alert('로그인에 실패')
                    },
                })
            },
            fail: function (error: Error) {
                console.log(error)
            },
        })
    }

    const isLogined = useMemo(() => !!cookies.pln, [cookies])
    const {pathname} = useLocation()

    useEffect(() => {
        if (!isLogined && pathname !== ROUTE.LOGIN) {
            window.location.replace(ROUTE.LOGIN)
        }
    }, [isLogined, pathname])

    const logout = () => {
        if (window.Kakao.Auth.getAccessToken()) {
            window.Kakao.Auth.logout(function() {
                window.Kakao.Auth.setAccessToken(undefined)
            })
            
            window.Kakao.Auth.setAccessToken(undefined)
        }
        removeCookie('pln')
    }
    return {login, logout, isLogined, isLoading}
}

export default useKakaoLogin
