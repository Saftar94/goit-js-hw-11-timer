const refs = {
  daysEl: document.querySelector('[data-value="days"]'),
  hoursEl: document.querySelector('[data-value="hours"]'),
  minsEl: document.querySelector('[data-value="mins"]'),
  secsEl: document.querySelector('[data-value="secs"]'),
  blocEL: document.querySelector('#timer-1'),
}

const { daysEl, hoursEl, minsEl, secsEl } = refs

class CountdownTimer {
  constructor(finishDate) {
    this.finishDate = finishDate
    this.initId = null
    this.deltaTime = 0
  }
  start() {
    this.initId = setInterval(() => {
      let nowTime = Date.now()

      this.deltaTime = this.finishDate['targetDate'] - nowTime

      if (this.deltaTime <= 0) {
        clearInterval(this.initId)
      }

      const days = this.pad(Math.floor(this.deltaTime / (1000 * 60 * 60 * 24)))
      const hours = this.pad(
        Math.floor((this.deltaTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      )
      const mins = this.pad(
        Math.floor((this.deltaTime % (1000 * 60 * 60)) / (1000 * 60)),
      )
      const secs = this.pad(Math.floor((this.deltaTime % (1000 * 60)) / 1000))

      daysEl.textContent = days
      hoursEl.textContent = hours
      minsEl.textContent = mins
      secsEl.textContent = secs
    }, 1000)
  }

  stop() {
    clearInterval(this.initId)
    console.log(this.initId)
  }
  pad(value) {
    return String(value).padStart(2, '0')
  }
}

const Timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jan 01, 2022').getTime(),
})
Timer.start()
