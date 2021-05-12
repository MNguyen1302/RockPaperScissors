let userScore = 0;
let computerScore = 0;

class Game {
    constructor() {
        this.computer = ['rock', 'paper', 'scissors'];
        this.html = '';
    }
    createDiv() {
        this.html += `<div class="score-board">
            <div id="user-label" class="badge">User: <span id="user-choice"></span></div>
            <div id="computer-label" class="badge">Computer: <span id="computer-choice"></span></div>
        </div>
        <span id="user-score">0</span><span id="dot"> : </span><span id="computer-score">0</span>
        <div class="result"></div>
        <div class="choices">
            <a id="rock" class="choice">
                <img src="rock.png" alt="Rock">
            </a>
            <a id="paper" class="choice">
                <img src="paper.png" alt="Paper">
            </a>
            <a id="scissors" class="choice">
                <img src="scissors.png" alt="Scissors">
            </a>
        </div>
        <div class="menu-button">
            <button class="reset">Play Again</button>
            <button class="back">Back</button>
        </div>
        `;
        document.getElementById('game').innerHTML = this.html;

        /* DOM */
        this.resultDiv = document.querySelector('.result');
        this.userScoreSpan = document.querySelector('#user-score');
        this.comScoreSpan = document.querySelector('#computer-score');
        this.userChoiceShow = document.querySelector('#user-choice');
        this.computerChoiceShow = document.querySelector('#computer-choice');

    }
    getComputerChoice() {
        let choices = Math.floor(Math.random() * 3);
        return this.computer[choices];
    }
    startGame(userChoice) {
        let computerChoice = this.getComputerChoice();
        if(userChoice === 'rock') {
        if(computerChoice === 'scissors') this.win();
        else if(computerChoice === 'paper') this.lose();
        else if(computerChoice === 'rock') this.draw();
        }
        else if(userChoice === 'paper') {
            if(computerChoice === 'rock') this.win();
            else if(computerChoice === 'scissors') this.lose();
            else if(computerChoice === 'paper') this.draw();
        }
        else {
            if(computerChoice === 'paper') this.win();
            else if(computerChoice === 'rock') this.lose();
            else if(computerChoice === 'scissors') this.draw();
        }
        this.showChoice(userChoice, computerChoice); 
    }
    win() {
        userScore++;
        this.userScoreSpan.innerHTML = userScore;
        this.resultDiv.innerHTML = "You Win";
    }
    lose() {
        computerScore++;
        this.comScoreSpan.innerHTML = computerScore;
        this.resultDiv.innerHTML = "You Lose";
    }
    draw() {
        this.resultDiv.innerHTML = "It's a draw!!!";
    }
    showChoice(userChoice, computerChoice) {
        this.userChoiceShow.innerHTML = userChoice;
        this.computerChoiceShow.innerHTML = computerChoice;
    }
    resetGame() {
        userScore = 0;
        computerScore = 0;
        this.resultDiv.innerHTML = "Play Again";
        this.userChoiceShow.innerHTML = '';
        this.computerChoiceShow.innerHTML = '';
        this.userScoreSpan.innerHTML = userScore;
        this.comScoreSpan.innerHTML = computerScore;
    }
    main() {
        this.createDiv();
        
        const rockClick = document.querySelector('#rock');
        const paperClick = document.querySelector('#paper');
        const scissorsClick = document.querySelector('#scissors');
        const resetClick = document.querySelector('.reset');
        const backClick = document.querySelector('.back');
        const startGame = document.querySelector('#start');
    
        rockClick.addEventListener('click', () => this.startGame('rock'));
        paperClick.addEventListener('click', () => this.startGame('paper'));
        scissorsClick.addEventListener('click', () => this.startGame('scissors'));
        resetClick.addEventListener('click', () => this.resetGame());
        backClick.addEventListener('click', () => {
            document.querySelector('.header').style.display = 'block';
            document.querySelector('#game').innerHTML = '';
            document.querySelector('#menu').style.display = 'flex';
            this.resetGame();
        });
    }
}

document.querySelector('#startGame').addEventListener('click', () => {
    document.querySelector('.header').style.display = 'none';
    document.querySelector('#menu').style.display = 'none';
    const game = new Game();
    game.main();
});