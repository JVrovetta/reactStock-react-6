class DateTime {
  constructor(dateTime) {
    if (dateTime) {
      this.dateValue = dateTime.dateValue
      this.day = dateTime.day
      this.month = dateTime.month
      this.year = dateTime.year
      this.hour = dateTime.hour
      this.minute = dateTime.minute
    } else {
      const now = new Date()
      this.dateValue = now.getTime()
      this.day = now.getDate()
      this.month = now.getMonth() + 1
      this.year = now.getFullYear()
      this.hour = now.getHours()
      this.minute = now.getMinutes()
    }
  }

  getFDateTime() {
    return `${this.day.toString().padStart(2, "0")}/${this.month.toString().padStart(2, "0")}/${this.year} | ${this.hour}:${this.minute.toString().padStart(2, "0")}`
  }
}

export default DateTime