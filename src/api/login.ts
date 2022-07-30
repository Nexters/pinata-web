import {ApiResponse} from '$types/ApiResponse'
import client from '$util/client'

export type LoginRequest = {
    email: string
    nickname: string
    profileImageUrl: string
}

export type LoginResponse = {
    accessToken: string
}

export const login = async (req: LoginRequest) => {
    const {
        data: {data},
    } = await client.post<ApiResponse<LoginResponse>>('/v1/auth/signup', {
        ...req,
    })

    return data
}
