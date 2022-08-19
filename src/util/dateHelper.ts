import { format } from 'date-fns';

export const formatDateTime = (dateTime: string) => format(new Date(dateTime), 'yyyy.MM.dd a hh:mm').replace(/AM/g, '오전').replace(/PM/g, '오후')
