import {useMemo} from 'react'
import {useCookies} from 'react-cookie'
import {login as fetchLogin} from '$api/login'

type AccessInfo = {
    access_token: string
    expires_in: number
    scope: string
    token_type: string
    refresh_token: string
    refresh_token_expires_in: number
}

const useKakaoLogin = () => {
    const [cookies, setCookie, removeCookie] = useCookies(['pln'])
    const isInitialized = window.Kakao.isInitialized()
    const login = () => {
        if (!isInitialized) {
            throw new Error('Kakao Login should be initialized.')
        }

        window.Kakao.Auth.login({
            success: function (accessInfo: AccessInfo) {
                window.Kakao.API.request({
                    url: '/v2/user/me',
                    success: async function (profile: any) {
                        const currentTime = new Date()
                        const {accessToken} = await fetchLogin({
                            email: profile.kakao_account.email,
                            nickname: profile.kakao_account.profile.nickname,
                            profileImageUrl: profile.kakao_account.profile.thumbnail_image_url,
                        })
                        setCookie('pln', accessToken, {
                            path: '/',
                            expires: new Date(currentTime.setSeconds(currentTime.getSeconds() + accessInfo.expires_in)),
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
            window.Kakao.API.request({
                url: '/v1/user/unlink',
                success: function (response: any) {
                    console.log(response)
                    removeCookie('pln')
                },
                fail: function (error: Error) {
                    console.log(error)
                },
            })
            window.Kakao.Auth.setAccessToken(undefined)
        }
    }

    const isLogined = useMemo(() => !!cookies.pln, [cookies])
    return {login, logout, isLogined}
}

export default useKakaoLogin
