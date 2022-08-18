import { ApiResponse } from './../types/ApiResponse';
import {useGetQuery, useRequest} from '$hooks/useRequest'
import client from '$util/client'
import {GiftItem} from './gift'

export enum EventStatus {
    WAIT,
    PROCESS,
    COMPLETE,
    CANCEL,
}

export const EVENT_TYPE = {
    RANDOM: 'RANDOM',
    FCFS: 'FCFS',
} as const

export type EventType = typeof EVENT_TYPE[keyof typeof EVENT_TYPE]

export type EventItem = {
    eventId: number
    eventTitle: string
    eventCode: string
    result: boolean
    resultMessage: string
    resultImageUrl: string
    itemId: number
    itemTitle?: string
    itemImageUrl?: string
    participateAt: string
}

export type EventResponse = {
    id: number
    title: string
    code: string
    type: string
    openAt: string
    closeAt: string
    status: string
    hitMessage: string
    hitImageUrl: string
    missMessage: string
    missImageUrl: string
}

export const participateEvent = async (eventCode: string, token: string) => {
    const data = await client.get<EventResponse, ApiResponse<EventResponse>>(`/api/v1/events/participate/${eventCode}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
    return data
}

export type ParticipatedEventResponse = {
    code: string
    itemId: number
    itemImageUrl: string
    itemTitle: string
    result: boolean
    resultImageURL: string
    resultMessage: string
}

export const checkEventResult = async (eventCode: string, token: string) => {
    const data = await client.post<ParticipatedEventResponse, ApiResponse<ParticipatedEventResponse>>('/api/v1/events/participate', {code: eventCode}, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    })
    return data
}

export type CreateEventRequest = {
    title: string
    type: EventType
    isPeriod: boolean
    openAt: string
    closeAt: string
    items: GiftItem[]
    hitMessage: string
    hitImageUrl: string
    missMessage: string
    missImageUrl: string
}

export type CreateEventResponse = {
    eventCode: string
}

const createEvent = async (newEvent: CreateEventRequest, token?: string) => {
    const {data} = await client.post<CreateEventResponse>(
        '/api/v1/events',
        {...newEvent},
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        },
    )
    return data
}

export const useCreateEvent = () => {
    const {mutateAsync, data, error, isLoading} = useRequest<CreateEventRequest, CreateEventResponse>(createEvent)
    return {createEvent: mutateAsync, data, error, isLoading}
}

export type Event = {
    id: number
    code: string
    title: string
    openAt: string
    closeAt: string
    status: EventStatus
}

export type EventListResponse = Event[]

export const useEventList = () => {
    const {data, isLoading} = useGetQuery<EventListResponse>('/api/v1/events')
    if (data?.data) {
        return {data: data.data, isLoading}
    }
    
    return {data: null}
}

export type JoinedEventListResponse = EventItem[]

export const useJoinedEventList = () => {
    const {data} = useGetQuery<JoinedEventListResponse>('/api/v1/events/participate/me')
    if (data?.data) {
        return {data: data.data}
    }
    return {data: null}
}
