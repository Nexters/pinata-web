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

export const participateEvent = async (eventCode: string) => {
    const {
        data: {data},
    } = await client.get<ApiResponse<any>>(`/api/v1/events/participate/${eventCode}`)
    return data
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
            type: EventType.PROCESS,
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
            type: EventType.PROCESS,
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