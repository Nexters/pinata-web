import {ApiResponse} from '$types/ApiResponse'
import client from '$util/client'

export type EventListResponse = {}

export const getEventList = async () => {
    const {
        data: {data},
    } = await client.get<ApiResponse<EventListResponse>>('/api/v1/events/make/me')
    return data
}

export const participateEvent = async (eventCode: string) => {
    const {
        data: {data},
    } = await client.get<ApiResponse<any>>(`/api/v1/events/participate/${eventCode}`)
    return data
}
