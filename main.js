game = function() {
    playerPT = 0;
    cpuPT = 0;

    startGame = function() {
        startBTN = document.querySelector('.start button');
        startSCN = document .querySelector('.start');
        vs = document.querySelector('.vs');

        startBTN.addEventListener('click', function() {
            startSCN.classList.add('gameout');
            vs.classList.add('gamein');
            vs.classList.remove('gameout');
        });
    };

    playvs = function() {
        check = document.querySelectorAll('.check button');
        launch = document.querySelectorAll('.launch img');
        playerHand = document.querySelector('.player_game');
        cpuHand = document.querySelector('.cpu_game');

        cpucheck = ['rock','paper','scissors'];

        check.forEach((opt1) => {
            opt1.addEventListener('click', function() {
                cpuNumber = Math.floor(Math.random()*3); 
                cpuChoice = cpucheck[cpuNumber];

                setTimeout(() => {
                    compareLaunch(this.textContent, cpuChoice);

                    playerHand.src = `${this.textContent}.png`;
                    cpuHand.src = `${cpuChoice}.png`;
                }, 1000);
            });
        });
    };

    compareLaunch = (playerChoice, cpuChoice) => {
        ps_win = document.querySelector('.ps_win');

        if(playerChoice === cpuChoice) {
            ps_win.textContent = 'Pareggio';
            return;
        }

        if(playerChoice === 'rock') {
            if(cpuChoice === 'scissors') {
                ps_win.textContent = 'Player ha Vinto!';
                playerPT++;
                endGame();
                updateScore();
                return;
            } else {
                ps_win.textContent = 'CPU ha Vinto!';
                cpuPT++;
                endGame();
                updateScore();
                return;
            }
        }

        if(playerChoice === 'paper') {
            if(cpuChoice === 'scissors') {
                ps_win.textContent = 'CPU ha Vinto!';
                cpuPT++;
                endGame();
                updateScore();
                return;
            } else {
                ps_win.textContent = 'Player ha Vinto!';
                playerPT++;
                endGame();
                updateScore();
                return;
            }
        }

        if(playerChoice === 'scissors') {
            if(cpuChoice === 'rock') {
                ps_win.textContent = 'CPU ha Vinto!';
                cpuPT++;
                endGame();
                updateScore();
                return;
            } else {
                ps_win.textContent = 'Player ha Vinto!';
                playerPT++;
                endGame();
                updateScore();
                return;
            }
        }
    };

    updateScore = function() {
        playerScore = document.querySelector('.player_pt p');
        cpuScore = document.querySelector('.cpu_pt p');
        playerScore.textContent = playerPT;
        cpuScore.textContent = cpuPT;
    };

    restartGame = () => {
        reStart = document.querySelector('.ps_winend button');
        reStart.addEventListener('click', () => {
            window.location.reload();
        });
    };
    restartGame();

    endGame = () => {
        ps_winend = document.querySelector('.ps_winend');
        vs = document.querySelector('.vs');
        ps_win_stop = document.querySelector('.ps_win_stop');

        if(playerPT === 5) {
            vs.classList.remove('gamein');
            vs.classList.add('gameout');
            setTimeout(() => {
                ps_winend.classList.add('gamein');
                ps_winend.classList.remove('gameout');
                ps_win_stop.textContent = 'Player ha vinto la partita!';
            }, 1000);
        } else if (cpuPT === 5) {
            vs.classList.remove('gamein');
            vs.classList.add('gameout');
            setTimeout(() => {
                ps_winend.classList.add('gamein');
                ps_winend.classList.remove('gameout');
                ps_win_stop.textContent = 'CPU ha vinto la partita!';
            }, 1000);
        }
    };

    startGame();
    playvs();
}
game();