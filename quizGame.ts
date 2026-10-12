//IT 505
//Joshua Dalton

const questions = [ //stores questions and answers
    {question: "How many NFL teams are there?", answer: "32"},
    {question: "What is the capital of New Hampshire?", answer: "concord"},
    {question: "What coding language is being used?", answer: "typescript"},
    {question: "What is 2 plus 2?", answer: "4"},
    {question: "What is the smallest country?", answer: "vatican city"}
];

function createScore() { //score tracker using closure
    let score = 0;

    return function() {
        score++;
        return score;
    };
}

function checkAnswer(input: string, answer: string): boolean {
    return input.toLowerCase().trim() === answer; //checks if user answer matches correct answer
}

function startQuiz(callback: (input: string, answer: string) => boolean) { //runs quiz and takes a callback
    const addScore = createScore();
    let score = 0;

    console.log("Welcome to the Quiz!");

    questions.forEach((item) => { //go through each question
        const input = prompt(item.question);

        if (input !== null && callback(input, item.answer)) {
            console.log("Correct!");
            score = addScore();
        } else {
            console.log("Incorrect!");
        }
    });

    console.log("Final Score: " + score + "/" + questions.length); //final score
}

startQuiz(checkAnswer); //starts quiz using checkAnswer as callback