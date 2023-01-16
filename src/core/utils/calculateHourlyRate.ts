import *  as dayjs from "dayjs";

/**
 * Function responsible for calculating the value from the entry
 * and exit time. For the example, we fixed the hourly rate at 3 reais and 50 cents.
 */
export default (start, finish) => {
    start = dayjs(start).tz("America/Sao_Paulo").format("YYYY-MM-DD HH:MM");
    const hours = dayjs(finish).diff(dayjs(start), 'hours');
    const days = Math.floor(hours / 24);
    return (hours - (days * 24)) * 3.50
}