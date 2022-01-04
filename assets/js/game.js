//random number function
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1)) + min;
    return value;
}

//fight function
var fight = function(enemy) {

    while(playerInfo.health > 0  && enemy.health > 0) {

            //ask player if they want to skip round
            var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle?  Enter 'FIGHT or 'SKIP' to choose.");

            //if player chooses to fight:
            if (promptFight === "fight" || promptFight === "FIGHT" || promptFight === "Fight") {

                //subtract the value of playerInfo.attack from value of enemy.health and update enemy.health variable
                var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
                enemy.health = Math.max(0, enemy.health - damage);

                //log resulting message to console
                console.log(
                    playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining."
                );

                //check enemy health
                if (enemy.health <= 0) {
                    window.alert(enemy.name + " has died!");
                    break;
                }

                else {
                    window.alert(enemy.name + " still has " + enemy.health + " health left.")
                }

                //subtract the value of enemy.attack from value of playerInfo.health and update playerInfo.health variable
                var damage = randomNumber(enemy.attack - 3, enemy.attack);
                playerInfo.health = Math.max(0, playerInfo.health - damage);

                //log resulting message to console
                console.log(
                    enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
                );

                //check player health
                if (playerInfo.health <= 0) {
                    window.alert(playerInfo.name + " has died!");
                    break;
                }

                else {
                    window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.")
                }
        }
        
        //if player chooses to skip:
        else if (promptFight === "skip" || promptFight === "SKIP" || promptFight === "Skip") {
            //confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            //if yes, leave fight
            if (confirmSkip) {
                window.alert(playerInfo.name + " has chosen to skip the fight. Goodbye!");
                
                //Subtract money from player
                playerInfo.money = Math.max(0, playerInfo.money - 10);
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

//object definitions

var playerInfo = {
    name: window.prompt("What is your robot's name?"),
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    refillHealth: function() {
        if (this.money >= 7) {
            window.alert("Refilling player's health by 20 for 7 gold.");
            this.health += 20;
            this.money -= 7;
        }
        else {
            window.alert("You don't have enough money!");
        }
    },
    upgradeAttack: function() {
        if (this.money >= 7) {
            window.alert("Upgrading player's attack by 6 for 7 gold.");
            this.attack += 6;
            this.money -= 7;
        }
        else {
            window.alert("You don't have enough money!");
        }
    }
};

console.log(playerInfo.name, playerInfo.attack, playerInfo.health);

var enemyInfo = [
    {
        name: "Roborto",
        attack: randomNumber(10,14)
    },
    {
        name: "Amy Android",
        attack: randomNumber(10,14)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(10,14)
    }
];

// start game function
var startGame = function() {
    //reset playerstats
    playerInfo.reset();

    //fight loop
    for(var i = 0; i< enemyInfo.length; i++) {

        if (playerInfo.health > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i+1));
            var pickedEnemyObj = enemyInfo[i];
            pickedEnemyObj.health = randomNumber(40, 60);
            fight(pickedEnemyObj);

            //shop if we're not at last enemy in array
            if (playerInfo.health > 0 && i < enemyInfo.length - 1 ){
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
    if (playerInfo.health > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
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
            playerInfo.refillHealth();
            break;
        
        //upgrade attack
        case "upgrade":
        case "UPGRADE":
        case "Upgrade":
            playerInfo.upgradeAttack();
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