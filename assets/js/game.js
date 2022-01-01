var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

//fight function
var fight = function() {
    // alert players they are starting the round 
    window.alert("Welcome to Robot Gladiators!");

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
};

fight();