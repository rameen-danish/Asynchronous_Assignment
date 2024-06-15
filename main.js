#! /usr/bin/env node
//Rameen Rashid
//15-June-2024
console.log("\n \t \t ***Asynchronous Assignment*** ");
/*Question # 1
Write a simple asynchronous TypeScript function fetchGreeting that returns a greeting message after a 2-second delay using setTimeout.*/
console.log("\n Question # 1");
async function fetchGreeting() {
    setTimeout(() => {
        console.log("Hello World");
    }, 2000);
}
fetchGreeting(); //function calling
/*Question # 2
Write a function simulateTask that simulates a task by logging "Task started", waits for 1 second, and then logs "Task completed". Use setTimeout for the delay.*/
console.log("\n Question # 2");
function simulateTask() {
    console.log("Task Started");
    setTimeout(() => {
        console.log("Task Completed");
    }, 1000);
}
simulateTask(); //function calling
/*Question # 3
Write a function fetchData that returns a Promise which resolves with the string "Data fetched successfully!" after a delay of 1 second.*/
console.log("\n Question # 3");
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched successfully!");
        }, 1000);
    });
}
fetchData().then((response) => {
    console.log(response);
});
/*Question # 4
Write a function fetchWithError that returns a Promise. It should randomly either resolve with "Data fetched successfully!" or reject with "Data fetch failed!" after a delay of 1 second. Handle the rejection using .catch*/
console.log("\n Question # 4");
async function fetchWithError() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const random = Math.floor(Math.random() * 100 + 1); //for random value using math.random and math.floor for integer value
            console.log("Random Number:", random);
            if (random % 2 == 0) { // if condition true the number is even resolve run
                resolve("Data fetched successfully!, number is even");
            }
            else {
                reject("Data fetch failed!, because number is odd"); //else random number is odd reject is run
            }
        }, 1000);
    });
}
fetchWithError().then((response) => { console.log(response); }) //console result using then and catch
    .catch((error) => { console.log(error); });
/*Question # 5
Write a function executeSequentially that executes two functions fetchData and processData sequentially using Promises, and logs the results in the order they are called.*/
console.log("\n Question # 5");
let fetchdata = new Promise((resolve, reject) => {
    resolve("Data Fetched");
});
let processData = new Promise((resolve, reject) => {
    resolve("Data Processed");
});
async function executeSequentially() {
    let fetch = await fetchdata;
    console.log(fetch);
    let process = await processData;
    console.log(process);
}
executeSequentially(); //function calling
export {};
