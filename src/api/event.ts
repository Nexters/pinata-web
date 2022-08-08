import { useMyQuery } from '$hooks/useRequest'
import {ApiResponse} from '$types/ApiResponse'
import client from '$util/client'

export enum EventType {
    WAIT,
    PROCESS,
    COMPLETE,
    CANCEL
}

export type Event = {
    id: number
    code: string
    title: string
    openAt: string
    closeAt: string
    type: EventType
    limitCount: number
    hitCount: number
    participantCount: number
}

export type EventListResponse = Event[]

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


export const useEventList = () => {
    const {isLoading, data} = useMyQuery<EventListResponse>('/api/v1/events/make/me')

    return {isLoading, data}
}