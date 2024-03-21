const waitTime = 3000
console.log(`setting a ${waitTime / 1000} second delay`)
const timerFinished = ()=>{
    clearInterval(interval)
    console.log("done")
}
setTimeout(timerFinished, waitTime)
const waitInterval = 500
let current = 0
const inTime = ()=>{
    current += waitInterval
    console.log(`waiting ${current / 1000} seconds`)
}
const interval = setInterval(inTime, waitInterval)