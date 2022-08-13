import client from '$util/client'
import {FetchError} from '$util/FetchError'
import {useMutation, useQuery} from '@tanstack/react-query'
import useAuthToken from './useAuthToken'

/**
 * @description post method 로 호출할 때 사용해주세요 :)
 */
export const useRequest = <Request, Response>(api: (req: Request, token?: string) => Promise<Response>) => {
    const accessToken = useAuthToken()
    
    const {mutate, mutateAsync, data, error, isLoading, ...rest} = useMutation((req: Request) => api(req, accessToken), {
        onSuccess: async (response) => {
            return response
        },
    })

    if (error) {
        throw new FetchError()
    }

    return {mutate, mutateAsync, data, error, isLoading, ...rest}
}

export const useMyQuery = <T>(url: string, params?: Record<string, string | number>) => {    
    const accessToken = useAuthToken()

    const {isLoading, data, error} = useQuery([url], () =>
        client.get<T, T>(url, {
            params,
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        }),
    )

    if (error) {
        throw new FetchError()
    }

    return {
        isLoading,
        data,
    }
}
