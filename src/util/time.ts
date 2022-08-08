export function changeHHMMSS(hour:number, minute:number, second:number){
    return `${hour < 10 && '0'}${hour}}${minute < 10 && '0'}${minute}${second < 10 && '0'}${second}`
}

export function changeSecondsHHMMSS(leftSeconds: number) {
    const hours = Math.floor(leftSeconds / (60 * 60))
    const minutes = Math.floor((leftSeconds % (60 * 60)) / 60)
    const seconds = Math.floor(leftSeconds % 60)

    return (
        `${hours < 10 ? '0' : ''}${hours}` +
        ':' +
        `${minutes < 10 ? '0' : ''}${minutes}` +
        ':' +
        `${seconds < 10 ? '0' : ''}${seconds}`
    )
}