import { getImageSource } from '$util/imageHelper';
import { useMyQuery, useRequest } from '$hooks/useRequest';
import client from '$util/client'
import { GiftItem } from './gift'

export enum EventStatus {
    WAIT,
    PROCESS,
    COMPLETE,
    CANCEL
}

export const EVENT_TYPE = {
    RANDOM: 'RANDOM',
    FCFS: 'FCFS',
} as const

export type EventType = typeof EVENT_TYPE[keyof typeof EVENT_TYPE]

export type Item = {
    id: number;
    title: string;
    imageUrl: string;
    rank: string;
    isAccepted: string; // ?
  };

export type EventResponse = {
    id: number;
    title: string;
    code: string;
    type: string;
    openAt: string;
    closeAt: string;
    status: string;
    items: Item[];
    hitMessage: string;
    hitImageUrl: string;
    missMessage: string;
    missImageUrl: string;
}

export const participateEvent = async (eventCode: string) => {
    const data = await client.get<EventResponse, EventResponse>(`/api/v1/events/participate/${eventCode}`)
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
    const {data} = await client.post<CreateEventResponse>('/api/v1/events', {...newEvent}, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
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
    const  {data, isLoading} = useMyQuery<EventListResponse>('/api/v1/events')
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
    return {
        data: {
            data: [
                {
                    'eventId': 2,
                    'eventTitle': '이벤트 1',
                    'eventCode': '39630708-df23-46a8-b31e-03bef5f600d2',
                    'result': true,
                    'resultMessage': '메롱~~',
                    'resultImageUrl': `${getImageSource('hit-image.png')}`,
                    'itemId': 3,
                    'itemTitle': '스타벅스 기프티콘 당첨~!',
                    'itemImageUrl': 'product-image.jpeg',
                    'participateAt': '2022-08-25 23:00:00',
                },
                {
                    'eventId': 2,
                    'eventTitle': '이벤트 2',
                    'eventCode': '39630708-df23-46a8-b31e-03bef5f600d2',
                    'result': false,
                    'resultMessage': '탈락입니다.',
                    'resultImageUrl': `${getImageSource('example-result-card.png')}`,
                    'itemId': 2,
                    'participateAt': '2022-08-25 23:00:00',
                }
            ]
        }
    }
    // const {data} = useMyQuery<JoinedEventListResponse>('/api/v1/events/participate/me')
    // return {data}
}