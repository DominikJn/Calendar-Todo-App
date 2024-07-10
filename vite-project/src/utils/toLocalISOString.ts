export default function toLocalISOString(date: Date): string {
    const localDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000); //offset in milliseconds. Credit https://stackoverflow.com/questions/10830357/javascript-toisostring-ignores-timezone-offset
    // Optionally remove second/millisecond if needed
    localDate.setSeconds(0)
    localDate.setMilliseconds(0)
    return localDate.toISOString().slice(0, -1).substring(0,10)
}