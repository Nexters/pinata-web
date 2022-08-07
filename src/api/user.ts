import {useMyQuery} from '$hooks/useRequest'

export type UserResponse = {
    email: string
    profileImgUrl: string
    nickname: string
    state: string
}

export const useUser = () => {
    const {data, isLoading} = useMyQuery('/api/v1/me')

    return {data, isLoading}
}
