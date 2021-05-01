// Specify a command: "new". "list" . "delete" . "quit"
// Enter new to-do
// Add to list/console.log
// list lists all to-dos with index: to-do
// delete which index you want to delete using splice
// quit gets out: OK, YOU QUIT THE APP
// Ask for input, while results is not equal to quit, keep looping
// Get quit part to work first
// Collect to-dos using array

let input;
// Array for storing every list item
let todoList = [];
while (input != 'quit') {
    // As long as user has not quit, continue to run the input command.
    input = prompt("Enter a command:");

    // If input = any of the below, run the code within. Then come back to top to enter new command.
    if (input == 'new') {
        let todo = prompt("Enter your to-do list item:");
        todoList.push(todo);
        console.log(`"${todo}" added to list`);
    } else if (input == 'list') {
        console.log("*********");
        for (i = 0; i < todoList.length; i++) {
            console.log(`${i}: ${todoList[i]}`);
        }
        console.log("*********");
    } else if (input == 'delete') {
        let index = prompt("Which list item do you want to delete?");
        todoList.splice(index, 1);
    }
}

console.log('Ok, you quit the app.');