const getClock = () => {

    const date = new Date()
    //Full date => YYYY-MM-DOTHH:ii:ss.micros
    const hour = date.getHours()
    const minute = date.getMinutes()
    const secs = date.getSeconds()

    const clock = hour+":"+minute+":"+secs
    document.getElementById('clock').innerHTML = clock
}

const timer = setInterval(getClock,1000)
const startTimer = () => {
    timer = setInterval(getClock,1000)
}

const stopTimer = () => {
clearInterval(timer)
}

