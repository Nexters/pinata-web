
const useKakaoLogin = () => {
    const isInitialized = window.Kakao.isInitialized()
    const login = () => {
        if (!isInitialized) {
            throw new Error('Kakao Login should be initialized.')
        }

        window.Kakao.Auth.login(
            {
                success: function (response:any) {
                    console.log(response)
                    window.Kakao.API.request({
                        url: '/v2/user/me',
                        success: function (response: any) {
                            console.log(response)
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
}

export default useKakaoLogin