var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

//fight function
var fight = function() {
    // alert players they are starting the round 
    window.alert("Welcome to Robot Gladiators!");

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
            playerMoney = playerMoney - 2;
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

fight();