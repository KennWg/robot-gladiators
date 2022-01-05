//random number function
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1)) + min;
    return value;
}

//fight or skip function
var fightOrSkip = function() {

    //ask player if they want to skip round
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle?  Enter 'FIGHT or 'SKIP' to choose.");

    //response check
    if (promptFight === "" || promptFight === null) {
        window.alert("Please provide a valid answer.");
        return fightOrSkip();
    }

    promptFight = promptFight.toLowerCase();

    if (promptFight !== "fight" && promptFight !== "skip") {
        window.alert("Please provide a valid answer.");
        return fightOrSkip();
    }

    //if player chooses to skip:
    if (promptFight === "skip") {
        //confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        //if yes, leave fight
        if (confirmSkip) {
            window.alert(playerInfo.name + " has chosen to skip the fight. Goodbye!");
            
            //Subtract money from player
            playerInfo.money = Math.max(0, playerInfo.money - 10);
            return true;
        }
    }
    else {
        return false;
    }
}

//fight function
var fight = function(enemy) {

    var isPlayerTurn = true;

    if (Math.random() > 0.5) {
        isPlayerTurn = false;
    }

    while(playerInfo.health > 0  && enemy.health > 0) {

        if (isPlayerTurn) {

            if (fightOrSkip()) {
                break;
            }
            
            //if player chooses to fight:
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
        }

        else {

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
        isPlayerTurn = !isPlayerTurn;
    }
}

//playername function
var getPlayerName = function() {
    var name = "";
    while (name === "" || name === null) {
        name = prompt("What is your robot's name?");
    }
    console.log("Your robot's name is " + name);
    return name;
};

//object definitions
var playerInfo = {
    name: getPlayerName(),
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
        "Would you like to 1. REFILL your health, 2. UPGRADE your attack, or 3. LEAVE the store? Please enter 1 for 'REFILL', 2 for 'UPGRADE', or 3 for 'LEAVE' to make a choice."
    );
    
    shopOptionPrompt = parseInt(shopOptionPrompt);

    //actions for shop
    switch (shopOptionPrompt) {

        //refill health
        case 1:
            playerInfo.refillHealth();
            break;
        
        //upgrade attack
        case 2:
            playerInfo.upgradeAttack();
            break;

        //leave
        case 3:
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