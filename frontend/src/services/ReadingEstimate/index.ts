export interface IReadingEstimate {
  estimate(content: string): number
}

export default class ReadingEstimate implements IReadingEstimate {
  static wordPerMinute = 200

  estimate(content: string): number {
    const textLength = content.split(' ').length

    if (textLength > 0) {
      const value = Math.ceil(textLength / ReadingEstimate.wordPerMinute)
      return value
    }
    return 0
  }
}
