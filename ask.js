const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("how are you doing?", answer=>{
    console.log(`your anser: ${answer}`)
})