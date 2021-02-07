let timeLeft = 8 * (24 * 60 * 60) + 23 * (60 * 60) + 55 * 60 + 44

const dhms = time => {
	const days = Math.floor(time / (24 * 60 * 60))
	const hms = time % (24 * 60 * 60)
	const hours = Math.floor(hms / (60 * 60))
	const ms = time % (60 * 60)
	const minutes = Math.floor(ms / 60)
	const seconds = time % 60
	return { days, hours, minutes, seconds }
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

const t = dhms(timeLeft)
daysHigh.forEach(div => (div.innerHTML = t.days < 10 ? "0" + t.days : t.days))
hoursHigh.forEach(div => (div.innerHTML = t.hours < 10 ? "0" + t.hours : t.hours))
minutesHigh.forEach(div => (div.innerHTML = t.minutes < 10 ? "0" + t.minutes : t.minutes))
secondsHigh.forEach(div => (div.innerHTML = t.seconds < 10 ? "0" + t.seconds : t.seconds))

let timerID = setInterval(function () {
  let t = dhms(timeLeft)
  console.log(t)

	secondsCard.classList.add("flip")
	secondsHigh.forEach(div => (div.innerHTML = t.seconds))

	if (t.seconds === 0) {
		secondsLow.forEach(div => (div.innerHTML = 59))
		setTimeout(() => {
			secondsHigh.forEach(div => (div.innerHTML = 59))
			secondsCard.classList.remove("flip")
		}, 900)
		minutesCard.classList.add("flip")
		minutesHigh.forEach(div => (div.innerHTML = t.minutes))

		if (t.minutes === 0) {
			minutesLow.forEach(div => (div.innerHTML = 59))
			setTimeout(() => {
				minutesHigh.forEach(div => (div.innerHTML = 59))
				minutesCard.classList.remove("flip")
			}, 900)
			hoursCard.classList.add("flip")
			hoursHigh.forEach(div => (div.innerHTML = t.hours))

			if (t.hours === 0) {
				hoursLow.forEach(div => (div.innerHTML = 23))
				setTimeout(() => {
					hoursHigh.forEach(div => (div.innerHTML = 23))
					hoursCard.classList.remove("flip")
				}, 900)
				daysCard.classList.add("flip")
				daysHigh.forEach(div => (div.innerHTML = t.days))
				daysLow.forEach(div => (div.innerHTML = t.days - 1))
			} else {
				hoursLow.forEach(div => (div.innerHTML = t.hours - 1))
				setTimeout(() => {
					hoursHigh.forEach(div => (div.innerHTML = t.hours - 1))
					hoursCard.classList.remove("flip")
				}, 900)
			}
		} else {
			minutesLow.forEach(div => (div.innerHTML = t.minutes - 1))
			setTimeout(() => {
				minutesHigh.forEach(div => (div.innerHTML = t.minutes - 1))
				minutesCard.classList.remove("flip")
			}, 900)
		}
	} else {
		secondsLow.forEach(div => (div.innerHTML = t.seconds - 1))
		setTimeout(() => {
			secondsHigh.forEach(div => (div.innerHTML = t.seconds - 1))
			secondsCard.classList.remove("flip")
		}, 900)
	}

	if (timeLeft === 1) clearInterval(timerID)
	timeLeft--
}, 1000)
