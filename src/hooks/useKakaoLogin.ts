
const useKakaoLogin = () => {
    const isInitialized = window.Kakao.isInitialized()
    const login = () => {
        if (!isInitialized) {
            throw new Error('Kakao Login should be initialized.')
        }

        window.Kakao.Auth.login(
            {
                success: function (accessInfo:any) {
                    console.log(accessInfo)
                    /**
                     * {
                     *  access_token: "jByte3exQy59uLvzzE7mrdtISsuJ_OtOMuV31HJ5CinJYAAAAYJDaOH6"
                        expires_in: 7199
                        refresh_token: "hkRDDW1WduuIQLzoHvqG0DidH_bOaQxPoKmj_sWpCinJYAAAAYJDaOH6"
                        refresh_token_expires_in: 5183999
                        scope: "account_email profile_image profile_nickname"
                        token_type: "bearer"
                     * }
                     */
                    window.Kakao.API.request({
                        url: '/v2/user/me',
                        success: function (profile: any) {
                            console.log(profile)
                        },
                        fail: function (error: Error) {
                            console.log(error)
                        },
                    })
                },
                fail: function (error: Error) {
                    console.log(error)
                },
            }
        )
    }

    const logout = () => {
        if (window.Kakao.Auth.getAccessToken()) {
            window.Kakao.API.request({
                url: '/v1/user/unlink',
                success: function (response:any) {
                    console.log(response)
                },
                fail: function (error: Error) {
                    console.log(error)
                },
            })
            window.Kakao.Auth.setAccessToken(undefined)
        }
    }
    return {login, logout}
}

export default useKakaoLogin