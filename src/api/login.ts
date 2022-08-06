import {useRequest} from '$hooks/useRequest'
import client from '$util/client'

export type LoginRequest = {
    providerId: number
    email: string
    nickname: string
    profileImageUrl: string
}

export type LoginResponse = {
    accessToken: string
}

export const login = async (req: LoginRequest) => {
    try {
        /**
         * @delete 성공 테스트용 mock
         */
        // return sleep<LoginResponse>({accessToken: 'tester'}, 2000)
        const {data} = await client.post<LoginResponse>('/v1/auth/signin', {
            ...req,
        })

        return data
    } catch (e) {
        throw e
    }
}

export const useLogin = () => {
    const {mutateAsync, data, error, isLoading} = useRequest<LoginRequest, LoginResponse>(login)
    return {callLogin: mutateAsync, data, error, isLoading}
}
