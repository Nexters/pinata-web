import {EventStatus} from '$api/event'
import {parseISODatetime} from '$util/dateHelper'
import {isAfter, isBefore} from 'date-fns'
import {useEffect, useMemo, useState} from 'react'

const useEventStatus = ({openAt, closeAt}: {openAt: string; closeAt: string}) => {
    const [status, setStatus] = useState<EventStatus | null>(null)

    const badgeProps: {
        type: 'danger' | 'default' | 'active'
        text: string
    } = useMemo(() => {
        switch (status) {
            case EventStatus.COMPLETE:
            case EventStatus.CANCEL:
                return {
                    type: 'default',
                    text: '종료',
                }
            case EventStatus.WAIT:
                return {
                    type: 'danger',
                    text: '시작전',
                }
            case EventStatus.PROCESS:
            default:
                return {
                    type: 'active',
                    text: '진행중',
                }
        }
    }, [status])

    useEffect(() => {
        if (!closeAt || !openAt) {
            return
        }

        const today = new Date()

        const isComplete = isAfter(today, parseISODatetime(closeAt))
        const isBeforeStart = isBefore(today, parseISODatetime(openAt))
        if (isComplete) {
            setStatus(EventStatus.COMPLETE)
            return
        }

        if (isBeforeStart) {
            setStatus(EventStatus.WAIT)
            return
        }

        setStatus(EventStatus.PROCESS)
    }, [closeAt, openAt])

    return {status, badgeProps}
}

export default useEventStatus
