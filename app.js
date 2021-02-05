const tendays = 10 * 24 * 60 * 60
let timeLeft = 10

const dhms = time => {
  const days = Math.floor(time / (24 * 60 * 60))
  const hms = time % (24 * 60 * 60)
  const hours = Math.floor(hms / (60 * 60))
  const ms = time % (60 * 60)
  const minutes = Math.floor(ms / 60)
  const seconds = time % 60

  return {
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds
  }
}

const daysHigh = document.querySelectorAll(".days-high")
const daysLow = document.querySelectorAll(".days-low")
const daysCard = document.querySelector("#days-counter .moving-card")

const hoursHigh = document.querySelectorAll(".hours-high")
const hoursLow = document.querySelectorAll(".hours-low")
const hoursCard = document.querySelector("#hours-counter .moving-card")

const minutesHigh = document.querySelectorAll(".minutes-high")
const minutesLow = document.querySelectorAll(".minutes-low")
const minutesCard = document.querySelector("#minutes-counter .moving-card")

const secondsHigh = document.querySelectorAll(".seconds-high")
const secondsLow = document.querySelectorAll(".seconds-low")
const secondsCard = document.querySelector("#seconds-counter .moving-card")

let timerID = setInterval(function() {
  console.log(dhms(timeLeft))
  
  secondsCard.classList.add('flip')
  secondsHigh.forEach(div => (div.innerText = dhms(timeLeft).seconds))
  secondsLow.forEach(div => (div.innerText = dhms(timeLeft).seconds - 1))
  setTimeout(() => secondsCard.classList.remove("flip"), 900)
  
  
  if (timeLeft === 1) clearInterval(timerID)
  timeLeft -= 1
}, 1000)