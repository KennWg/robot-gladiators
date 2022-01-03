var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

//game states
//win - when player has defeated all enemy robots
//lose - when player hp hits 0

//fight function
var fight = function(enemyName) {

    while(playerHealth > 0  && enemyHealth > 0) {

            //ask player if they want to skip round
            var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle?  Enter 'FIGHT or 'SKIP' to choose.");

            //if player chooses to fight:
            if (promptFight === "fight" || promptFight === "FIGHT" || promptFight === "Fight") {

                //subtract the value of playerAttack from value of enemyHealth and update enemyHealth variable
                enemyHealth = enemyHealth - playerAttack;

                //log resulting message to console
                console.log(
                    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
                );

                //check enemy health
                if (enemyHealth <= 0) {
                    window.alert(enemyName + " has died!");
                    break;
                }

                else {
                    window.alert(enemyName + " still has " + enemyHealth + " health left.")
                }

                //subtract the value of enemyAttack from value of playerHealth and update playerHealth variable
                playerHealth = playerHealth - enemyAttack;

                //log resulting message to console
                console.log(
                    enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
                );

                //check player health
                if (playerHealth <= 0) {
                    window.alert(playerName + " has died!");
                    break;
                }

                else {
                    window.alert(playerName + " still has " + playerHealth + " health left.")
                }
        }
        
        //if player chooses to skip:
        else if (promptFight === "skip" || promptFight === "SKIP" || promptFight === "Skip") {
            //confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            //if yes, leave fight
            if (confirmSkip) {
                window.alert(playerName + " has chosen to skip the fight. Goodbye!");
                
                //Subtract money from player
                playerMoney = playerMoney - 10;
                break;
            }

            //if no, ask again
            else {
                fight();
            }
        }

        //invalid option
        else {
            window.alert("You need to choose a valid option.  Try again!");
        }
    }
};

// start game function
var startGame = function() {
    //reset playerstats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    //fight loop
    for(var i = 0; i< enemyNames.length; i++) {

        if (playerHealth > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i+1));
            var pickedEnemyName = enemyNames[i];
            enemyHealth = 50;
            fight(pickedEnemyName);
        }
        else {
            window.alert("You have lost your robot in battle!  Game Over!");
            break;
        }
    }

    //endgame
    endGame();
};

// end game function
var endGame = function() {
    window.alert("The game has ended. Let's see how you did!")
    
    //if player alive
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
    }
    else {
        window.alert("You've lost your robot in battle.")
    }

    //play again confirmation
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if(playAgainConfirm) {
        startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!")
    }
}

//initial start game
startGame();