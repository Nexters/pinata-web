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

export type Item = {
    id: number
    title: string
    imageUrl: string
    rank: string
    isAccepted: string // ?
}

export type EventResponse = {
    id: number
    title: string
    code: string
    type: string
    openAt: string
    closeAt: string
    status: string
    items: Item[]
    hitMessage: string
    hitImageUrl: string
    missMessage: string
    missImageUrl: string
}

export const participateEvent = async (eventCode: string, token: string) => {
    const data = await fetch(`/api/v1/events/participate/${eventCode}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }).then((res) => {
        return res.json()
    })
    return data
}

export const checkEventResult = async (eventCode: string, token: string) => {
    const data = await fetch('/api/v1/events/participate', {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({code: eventCode}),
    }).then((res) => {
        return res.json()
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
    return {data, isLoading}
}

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

export type JoinedEventListResponse = EventItem[]

export const useJoinedEventList = () => {
    const {data} = useGetQuery<JoinedEventListResponse>('/api/v1/events/participate/me')
    return {data}
}
