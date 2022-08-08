// import {useMyQuery} from '$hooks/useRequest'

export type UserResponse = {
    email: string
    profileImgUrl: string
    nickname: string
    state: string
}

// export const useUser = () => {
//     const {data, isLoading} = useMyQuery<UserResponse>('/api/v1/me')

//     console.log(data)

//     return {data, isLoading}
// }
