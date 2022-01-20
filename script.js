//set the variables for the number for greeting and activity
let greeting = 'Welcome to my calculator'
let firstNum = 5
let secondNum = 7
let total = firstNum + secondNum
let activity = `The sum of ${firstNum} + ${secondNum} is : ${total}`

//set variables for selectors
let firstP = document.getElementById('firstP')
let secondP = document.getElementById('secondP')

//inserted variable into the objects
firstP.innerHTML = greeting
secondP.innerHTML = activity

