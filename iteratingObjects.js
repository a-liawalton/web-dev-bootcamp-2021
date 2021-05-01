// Sum up all the test scores

const testScores = {
    keenan: 80,
    damon: 67,
    kim: 89,
    shawn: 91,
    marlon: 72,
    dwayne: 77,
    nadia: 83,
    elvira: 97,
    diedre: 81,
    vonnie: 60
}

// Create an array of each value
const scores = Object.values(testScores);

console.log(scores);

// Add each of the values in the array up using a for of loop

let total = 0;

for (let score of scores) {
    total += score;
}

console.log(`Each score equals ${total}. The average score is ${total/scores.length}`);