//set varibles for the number and activity
let userName = prompt("Lets play the sum game.\n Please enter your name");
let numberOne = parseInt(prompt("Enter first number"));
let numberTwo = parseInt(prompt("Enter second number"));

let total = numberOne + numberTwo
let activity = `Hi, ${userName}! The sum of ${numberOne} + ${numberTwo} is ${total}`

//set variables for selectors
let firstP = document.getElementById('firstP')

//inserted variable into the objects
firstP.innerHTML = activity


