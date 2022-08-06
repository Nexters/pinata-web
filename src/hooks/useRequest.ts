import client from '$util/client'
import {FetchError} from '$util/FetchError'
import {useMutation, useQuery} from '@tanstack/react-query'
import {useCookies} from 'react-cookie'

/**
 * @description post method 로 호출할 때 사용해주세요 :)
 */
export const useRequest = <Request, Response>(api: (req: Request) => Promise<Response>) => {
    const {mutate, mutateAsync, data, error, isLoading, ...rest} = useMutation(api, {
        onSuccess: async (response) => {
            return response
        },
    })

    if (error) {
        throw new FetchError()
    }

    return {mutate, mutateAsync, data, error, isLoading, ...rest}
}

export const useMyQuery = (url: string, params?: Record<string, string | number>) => {
    const [cookies] = useCookies(['pln'])

    const {isLoading, data, error} = useQuery([url], () =>
        client.get(url, {
            params,
            headers: {
                Authorization: `Bearer ${cookies.pln}`,
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
