import { EventListResponse, EventType } from '$api/event'
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

export const useMyQuery = <T extends EventListResponse>(url: string, params?: Record<string, string | number>) => {
    const [cookies] = useCookies(['pln'])

    const {isLoading, data, error} = useQuery([url], () =>
    /** API 연결될떄까지 임시 코드입니다. */
    url === '/api/v1/events/make/me' ? [
        {
            id: 11111,
            code: 'example-event-1',
            title: '넥스터즈 깜짝 선물 드립니다!',
            openAt: '2022-07-01 13:00',
            closeAt: '2022-07-03 12:00',
            type: EventType.PROCESS,
            limitCount: 10,
            hitCount: 0,
            participantCount: 0
        }
    ] as EventListResponse
     : client.get<T, T>(url, {
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
