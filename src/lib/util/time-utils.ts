import {isToday, format} from 'date-fns'

export const formatDate = (date: Date): string => {
    let formattedDate = format(date, `MM/dd/yyyy`)
    let formattedTime = format(date, `h:mm a`);
    return formattedDate + ` ` + formattedTime;
}