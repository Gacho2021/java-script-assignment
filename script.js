//set the variables for the number for greeting and activity
let activity = 'The sum of ${firstNum} + $ {secondNum} is : ${firstNum + secondNum}'
let greeting = 'Welcome to my calculator'
let firstNum = 3
let secondNum = 9

//set variables for selectors
let firstP = document.getElementById('firstP')
let secondP = document.getElementById('secondP')

//inserted variable into the objects
firstP.innerHTML = greeting
secondP.innerHTML = activity

