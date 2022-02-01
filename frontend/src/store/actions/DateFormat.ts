export const dateFormatter = (date:any) => {
    const dateData = new Date(date)
    const year = dateData.getFullYear()
    let towDigitYear = year.toString().substring(2)
    const month = dateData.getMonth() + 1
    const day = dateData.getDate()
    const hour = dateData.getHours()
    const min = dateData.getMinutes()
    const formattedDate = `${towDigitYear}년 ${month}월 ${day}일 ${hour}:${min}`

    return formattedDate
}
