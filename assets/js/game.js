var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyAttack = 12;

//random number function
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1)) + min;
    return value;
}

//fight function
var fight = function(enemyName) {

    while(playerHealth > 0  && enemyHealth > 0) {

            //ask player if they want to skip round
            var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle?  Enter 'FIGHT or 'SKIP' to choose.");

            //if player chooses to fight:
            if (promptFight === "fight" || promptFight === "FIGHT" || promptFight === "Fight") {

                //subtract the value of playerAttack from value of enemyHealth and update enemyHealth variable
                var damage = randomNumber(playerAttack - 3, playerAttack);
                enemyHealth = Math.max(0, enemyHealth - damage);

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
                var damage = randomNumber(enemyAttack - 3, enemyAttack);
                playerHealth = Math.max(0, playerHealth - damage);

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
                playerMoney = Math.max(0, playerMoney - 10);
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

    enemyHealth = randomNumber(40, 60);

    //fight loop
    for(var i = 0; i< enemyNames.length; i++) {

        if (playerHealth > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i+1));
            var pickedEnemyName = enemyNames[i];
            enemyHealth = 50;
            fight(pickedEnemyName);

            //shop if we're not at last enemy in array
            if (playerHealth > 0 && i < enemyNames.length - 1 ){
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
                if(storeConfirm) {
                  shop();
                }
            }
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

//shop function
var shop = function() {
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
    );

    //actions for shop
    switch (shopOptionPrompt) {

        //refill health
        case "refill":
        case "REFILL":
        case "Refill":
            if (playerMoney >= 7) {
                window.alert("Refilling player's health by 20 for 7 gold.");
                playerHealth += 20;
                playerMoney -= 7;
            }
            else {
                window.alert("You don't have enough money!");
            }
            break;
        
        //upgrade attack
        case "upgrade":
        case "UPGRADE":
        case "Upgrade":
            if (playerMoney >= 7) {
                window.alert("Upgrading player's attack by 6 for 7 gold.");
                playerAttack += 6;
                playerMoney -= 7;
            }
            else {
                window.alert("You don't have enough money!");
            }
            break;

        //leave
        case "leave":
        case "LEAVE":
        case "Leave":
            window.alert("Leave the store.");
            break;

        default:
            window.alert("Please pick a valid option.");
            shop();
            break;
    }
};

//initial start game
startGame();