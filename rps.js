const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let ComputerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
   userChoice = e.target.id
   userChoiceDisplay.innerHTML = userChoice
   generateComputerChoice()
   getresult()
}))

function generateComputerChoice() {
   const randomNumber = Math.floor(Math.random() * 3)

   if (randomNumber === 0 ){
      ComputerChoice = 'rock'
   }
   if (randomNumber === 1 ){
      ComputerChoice = 'paper'
   }
   if (randomNumber === 2 ){
      ComputerChoice = 'scissors'
   }
   computerChoiceDisplay.innerHTML = ComputerChoice
}

function getresult(){
   {
   if(ComputerChoice === userChoice)
   result = 'Its a draw!'
   }

   if(ComputerChoice ==='rock' && userChoice === 'paper'){
      result = 'You win!'
   }

   if(ComputerChoice ==='paper' && userChoice === 'rock'){
      result = 'You Lost!'
   }

   if(ComputerChoice ==='scissors' && userChoice === 'rock'){
      result = 'You win!'
   }

   if(ComputerChoice ==='rock' && userChoice === 'scissors'){
      result = 'You Lost!'
   }

   if(ComputerChoice ==='paper' && userChoice === 'scissors'){
      result = 'You win!'
   }

   if(ComputerChoice ==='scissors' && userChoice === 'paper'){
      result = 'You Lost!'
   }
 resultDisplay.innerHTML = result
}
