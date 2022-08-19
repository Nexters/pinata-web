import { useGetQuery } from '$hooks/useRequest'

export type UserResponse = {
    email: string
    profileImageUrl: string
    nickname: string
    state: string
}

export const useUser = () => {
    const {data, isLoading} = useGetQuery<UserResponse>('/api/v1/me')

    return {data: data?.data, isLoading}
}
