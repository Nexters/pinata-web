import { TargetEvent } from 'types/Event';

const dummyEvent: TargetEvent = {
    id: 1,
    title: '예시 이벤트',
    code: '123',
    type: '?',
    openAt: '2022-07-22 13:00:00',
    closeAt: '2022-07-22 13:00:00',
    status: 'wait',
    items: [],
    hitMessage: '당첨',
    hitImageUrl: '',
    missMessage: '없음',
    missImageUrl: '',
};

export async function getEvent(eventCode: string) {
    return dummyEvent;
}
