import { useRequest } from '$hooks/useRequest';
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

export type Event = {
    id: number
    code: string
    title: string
    openAt: string
    closeAt: string
    type: EventStatus
    limitCount: number
    hitCount: number
    participantCount: number
}

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
};
  

export type EventListResponse = Event[]

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
    code: string
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

export const useEventList = () => {
    return {
        data: [
        {
            id: 11111,
            code: 'example-event-1',
            title: '넥스터즈 깜짝 선물 드립니다!',
            openAt: '2022-07-01 13:00',
            closeAt: '2022-07-03 12:00',
            type: EventStatus.PROCESS,
            limitCount: 10,
            hitCount: 0,
            participantCount: 0
        },
        {
            id: 11112,
            code: 'example-event-2',
            title: '점심 밥값 내기🍣',
            openAt: '2022-07-01 13:00',
            closeAt: '2022-07-03 12:00',
            type: EventStatus.PROCESS,
            limitCount: 10,
            hitCount: 0,
            participantCount: 0
        }
    ] as EventListResponse
    }
    // const  {data} = useMyQuery<EventListResponse>('/api/v1/events/make/me')
    // return { data}
}

export type EventItem = {
    title: string
    eventTitle: string
    id: number
    imageFileName: string
    isHit: boolean
    joinedDate: string
}

export type JoinedEventListResponse = EventItem[]

export const useJoinedEventList = () => {
    return  {
        data: [
            {
                title: '스타벅스 아메리카노',
                id: 121212,
                eventTitle: '넥스터즈 21기 깜짝 선물 3분께 드립니다.',
                imageFileName: '',
                isHit: true,
                joinedDate: '2022-07-01 13:00'
            },
            {
                title: '스타벅스 아메리카노',
                id: 131313,
                eventTitle: '넥스터즈 21기 깜짝 선물 3분께 드립니다.',
                imageFileName: '',
                isHit: true,
                joinedDate: '2022-07-01 13:00'
            }
        ]
    }
    // const {data} = useMyQuery<JoinedEventListResponse>('/api/v1/events/participate/me')
    // return {data}
}