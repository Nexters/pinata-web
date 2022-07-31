import {FetchError} from '$util/FetchError'
import {useMutation} from '@tanstack/react-query'

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
