let today = new Date().toISOString().split("T")[0]
let dateEl = document.getElementById('date-picker')
let submitButton = document.querySelector('.submit')
let inputTitle = document.querySelector('#title')
let daysEl = document.querySelector('.days')
let hoursEl = document.querySelector('.hours')
let minutesEl = document.querySelector('.minutes')
let secondsEl = document.querySelector('.seconds')
let containerInput = document.querySelector(".container-input")
let countdown = document.querySelector('.countdown')
let complete = document.querySelector('.complete')
let reset = document.querySelector('.reset')
let newCountdownButton = document.querySelector('.new-countdown-button')
let h1Complete = document.querySelector('.h1_complete')
let beforeEvent = document.querySelector('.beforeEvent')


let run

dateEl.setAttribute('min', today)

let countDownTitle = localStorage.getItem('title') || ''
let countDownDate = localStorage.getItem('date') || ''

if (localStorage.getItem('date')) {
    run = setInterval(updateDOM, 1000)
    containerInput.hidden = true
    countdown.hidden = false
    complete.hidden = true
}

let seconds = 1000
let minutues = seconds * 60
let hours = minutues * 60
let days = hours * 24

function updateDOM() {
    let now = new Date().getTime()
    let finishTime = new Date(countDownDate).getTime()
    let distance = finishTime - now

    console.log('run')
    daysEl.textContent = Math.floor(distance / days)
    hoursEl.textContent = Math.floor(distance % days / hours)
    minutesEl.textContent = Math.floor((distance % hours / minutues))
    secondsEl.textContent = Math.floor((distance % minutues / seconds))

    if (distance === 0) {
        containerInput.hidden = true
        countdown.hidden = true
        complete.hidden = false
        h1Complete.textContent = `Countdown finished on ${countDownDate}`
        clearInterval(run)
    }

}

submitButton.addEventListener('click', (e) => {
    countDownTitle = inputTitle.value
    countDownDate = dateEl.value
    localStorage.setItem("title", countDownTitle)
    localStorage.setItem("date", countDownDate)


    beforeEvent.textContent = `Before event "${countDownTitle}" : `
    if (countDownTitle.length === 0 || countDownDate.length === 0) {
        alert("input correct title and date")
        return false
    }
    updateDOM()
    run = setInterval(updateDOM, 1000)
    containerInput.hidden = true
    countdown.hidden = false
    complete.hidden = true

})

reset.addEventListener('click', () => {
    let countDownTitle = ''
    let countDownDate = ''
    clearInterval(run)
    containerInput.hidden = false
    countdown.hidden = true
    complete.hidden = true
    localStorage.clear()

})

newCountdownButton.addEventListener('click', () => {
    containerInput.hidden = false
    countdown.hidden = true
    complete.hidden = true
    console.log(countDownDate)
})