function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
    }
    let playerChoice = prompt('hey! enter choice')
    
    function game(){
        playerChoice;
        const computerChoice = getComputerChoice();
        console.log(playerChoice)
        console.log(computerChoice)
        switch(playerChoice + computerChoice){
            case 'paperrock':
            case 'rockscissors':
            case 'scissorspaper':
                console.log('player wins')
                break;
            case 'rockpaper':
            case 'scissorsrock':
            case 'paperscissors':
                console.log('computer wins')
                break;
            case 'rockrock':
            case 'paperpaper':
            case 'scissorsscissors':
                console.log('Its a draw');
                break;
        }
    }
    game()