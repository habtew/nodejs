process.stdout.write("Hello \n\n")

const questions = [
    "what is your name?",
    "what are you going to do?",
    "when are you coming back?"
]

const answers = []

function ask(i){
    process.stdout.write(`\n\n${questions[i]}`)
    process.stdout.write(" > ")
}

process.stdin.on("data", function(data){
    process.stdout.write(data.toString().trim())
})

ask(answers.length)