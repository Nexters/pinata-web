import {format, parseISO} from 'date-fns'

export const formatDateTime = (dateTime: string) => {
    dateTime = dateTime.replace(/ /g, 'T')
    return format(parseISO(dateTime), 'yyyy.MM.dd a hh:mm').replace(/AM/g, '오전').replace(/PM/g, '오후')
}

export const parseISODatetime = (dateTime: string) => {
    dateTime = dateTime.replace(/ /g, 'T')
    return parseISO(dateTime)
}
