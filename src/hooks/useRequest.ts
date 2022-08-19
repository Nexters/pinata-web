import { ApiResponse } from '$types/ApiResponse'
import client from '$util/client'
import {AuthorizationError, FetchError} from '$util/FetchError'
import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query'
import { AxiosError } from 'axios'
import useAuthToken from './useAuthToken'

/**
 * @description post method 로 호출할 때 사용해주세요 :)
 */
export const useRequest = <Request, Response>(api: (req: Request, token?: string) => Promise<Response>) => {
    const accessToken = useAuthToken()
    const queryClient = useQueryClient()

    const {mutate, mutateAsync, data, error, isLoading, ...rest} = useMutation((req: Request) => api(req, accessToken), {
        onSuccess: async (response) => {
            queryClient.invalidateQueries([api])
            return response
        },
        onSettled: () => {
            queryClient.invalidateQueries([api])
        },
        cacheTime: 0,
    })

    if (error) {
        throw new FetchError()
    }

    return {mutate, mutateAsync, data, error, isLoading, ...rest}
}

export const useGetQuery = <T>(url: string, params?: Record<string, string | number>, config: {
    throwWhenError?: boolean
    useErrorBoundary?: boolean
} = {
    throwWhenError: true,
    useErrorBoundary: true,
}) => {
    const {throwWhenError = true, useErrorBoundary = true} = config
    const accessToken = useAuthToken()
    
    const {isLoading, data, error, isError, refetch} = useQuery<ApiResponse<T>, Error, ApiResponse<T>, string[]>(
        [url, JSON.stringify(params)], 
        () => {
            if (!accessToken) {
                return Promise.reject(new AuthorizationError())
            }
            return client.get<ApiResponse<T>, ApiResponse<T>>(url, {
                params,
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            })
        },
        {
            useErrorBoundary: (error) => {
                const {response} = error as AxiosError
                return useErrorBoundary || (!!response?.status && response?.status >= 500)
            },
            retry: 0,
        }
    )

    if (isError && throwWhenError) {
        throw new FetchError()
    }

    return {
        isLoading,
        data,
        error,
        refetch,
    }
}
