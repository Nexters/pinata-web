import {useEffect, useMemo} from 'react'
import {useCookies} from 'react-cookie'
import {useLogin} from '$api/login'

// const ONE_DAY = 24 * 60 * 60
const TWO_HOURS = 2 * 60 * 60

const useKakaoLogin = () => {
    const [cookies, setCookie, removeCookie] = useCookies(['pln'])
    const {callLogin, data, isLoading} = useLogin()
    const isInitialized = window.Kakao.isInitialized()

    useEffect(() => {
        if (!isLoading && !!data) {
            const currentTime = new Date()
            setCookie('pln', data.accessToken, {
                path: '/',
                expires: new Date(currentTime.setSeconds(currentTime.getSeconds() + TWO_HOURS)),
            })
        }
    }, [data, isLoading, setCookie])

    const login = () => {
        if (!isInitialized) {
            throw new Error('Kakao Login should be initialized.')
        }

        window.Kakao.Auth.login({
            success: function () {
                window.Kakao.API.request({
                    url: '/v2/user/me',
                    success: async function (profile: any) {
                        // const currentTime = new Date()
                        await callLogin({
                            providerId: profile.id,
                            email: profile.kakao_account.email,
                            nickname: profile.kakao_account.profile.nickname,
                            profileImageUrl: profile.kakao_account.profile.thumbnail_image_url,
                        })
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

    const logout = () => {
        if (window.Kakao.Auth.getAccessToken()) {
            window.Kakao.Auth.logout(function() {
                window.Kakao.Auth.setAccessToken(undefined)
            })
            
            window.Kakao.Auth.setAccessToken(undefined)
        }
        removeCookie('pln')
    }

    const isLogined = useMemo(() => !!cookies.pln, [cookies])
    return {login, logout, isLogined, isLoading}
}

export default useKakaoLogin
