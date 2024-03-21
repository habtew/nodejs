process.stdout.write("Hello \n\n")

const questions = [
    "what is your name?",
    "what are you going to do?",
    "when are you coming back?"
]

const answers = []

function ask(i = 0){
    process.stdout.write(`\n\n${questions[i]}`)
    process.stdout.write(" > ")
}

ask(answers.length)

process.stdin.on("data", function(data){
    answers.push(data.toString().trim())
    if (answers.length < questions.length){
        ask(answers.length)
    }
    else{
        process.exit()
    }
})

process.on("exit", function(){
    process.stdout.write("\n\n\n\n")
    process.stdout.write(`${answers[0]} ${answers[1]} ${answers[2]}\n\n`)
})