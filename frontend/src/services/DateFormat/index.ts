export interface IDateFormat {
  format(date: string): string
}

export default class DateFormat implements IDateFormat {
  format(date: string): string {
    const d = new Date(date)
    const year = d.getFullYear()
    const month = d.getMonth() + 1
    const day = d.getDate()

    return `${day < 10 ? `0${day}` : day}.${
      month < 10 ? `0${month}` : month
    }.${year}`
  }
}
