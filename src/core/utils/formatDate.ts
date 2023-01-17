import * as dayjs from "dayjs"

export const formatDate = (date: string, type: 'init' | 'finish') => {
    if (type === 'init')
        return dayjs(date, 'YYYY-MM-DD').format('YYYY-MM-DD 00:00:00')

    if (type === 'finish')
        return dayjs(date, 'YYYY-MM-DD').format('YYYY-MM-DD 23:59:59')

    return date
}