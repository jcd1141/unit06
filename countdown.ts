//IT 505
//Joshua Dalton

function createCountdown(seconds: number) { //creates countdown + keeps track of remaining time
    let remaining = seconds;

    return function() { //returns function that decreases the time by 1
        remaining--;
        return remaining;
    };
}

const startCountdown = (seconds: number): void => { //starts countdown
    const countdown = createCountdown(seconds);

    console.log("Countdown starting!");

    const timer = setInterval(() => { //runs every second, updates countdown
        const remaining = countdown();

        console.log(remaining);

        if (remaining <= 0) {
            clearInterval(timer); //stops timer when reaches 0

            setTimeout(() => {
                console.log("Time is up!");
            }, 1000);
        }
    }, 1000);
};

const input = prompt("Enter countdown time in seconds:");
const seconds = Number(input);

if (input !== null && Number.isInteger(seconds) && seconds > 0) {
    startCountdown(seconds);
} else {
    console.log("Invalid");
}