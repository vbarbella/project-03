// Define player's base # of health to start with. For now, the user may heal above the starting amount, but in the future a bound should be set and overheals/over-damage will not register and instead cap out at 0 or 3000...
var baseHP = 3000;
// Created an object for the bosses with their names and health values as properties to call upon later.
var bosses = {
	name: ["Lord Marrowgar", "Lady Deathwhisper", "Deathbringer Saurfang", "Festergut and Rotface", "Professor Putricide", "Blood Prince Council", "Blood Queen Lana'thel", "Valithria Dreamwalker", "Sindragosa", "The Lich King"],
	health: [350, 375, 400, 600, 700, 775, 800, 850, 895, 1500]};
	// Here I created a variable n that will push to the next boss with a ++ (below). This will be used to call specific properties from the bosses object into functions.
var n = 0
// Starting display - this is updated each time the user clicks a button.
var bossDisplay = document.querySelector(".boss").innerHTML += "Your HP: " + '<span style="color:#fff">' + baseHP + "</span>" + "<br>" + bosses.name[n] + "'s  HP: " + '<span style="color:#fff">' + bosses.health[n] + "</span>";

// The first function or ability is the basic Attack. This number can range from 100-150. Each move the user makes, the boss will attack and the bosses abilities increase by n, each boss outputs about~ 100 more points than the boss before it. 
function basicAttack() {
	var randomPlayerDamageRange = Math.floor((Math.random() * 50)); 
	var randomBossDamageCrit = Math.floor((Math.random() * 5)); 
	var attackDamage = 100 + randomPlayerDamageRange;
	var bossHitDamage = n * 100 + randomBossDamageCrit + 1;
// Here determines the amount to subtract from the health of each the player and boss.
	var playerHP = baseHP - bossHitDamage;
	var bossHP = bosses.health[n] - attackDamage;
// A loop that while the player is still alive will run the damage against the boss and display the damage taken to the player until the boss is defeated and then will push to the next one and display its HP.
do {
	baseHP -= bossHitDamage;
	bosses.health[n] -= attackDamage;
	document.querySelector(".basic-attack").innerHTML += bosses.name[n] + " hits you for " + bossHitDamage + " HP." + "<br>You hit " + bosses.name[n] + " for " + attackDamage + " HP.<br>" + '<span style="color:#ff0043">' + "<br>Your HP: " + playerHP + "<br>Boss HP: " + bossHP + "</span><br><hr>";
if (bossHP <= 0) {
	var bossOrder = document.querySelector(".basic-attack").innerHTML += bosses.name[n++] + '<span style="color:#ff0043">' + " DEFEATED!</span>" + bossHP + " HP<br>" + "Critical Strike! Next boss: " + bosses.name[n] + ": " + bosses.health[n] + " HP!<br><hr>";
}} while (playerHP < 0);
// Update to the player HP and boss HP
document.querySelector(".boss").innerHTML = "Your HP: "+ '<span style="color:#fff">' + baseHP + "</span>" + "<br>" + bosses.name[n] + "'s  HP: " + '<span style="color:#fff">' + bosses.health[n] + "</span>";

	}

// Same type of function here, except important to leave out the damage to the boss' health. Because the user is using a healing ability- they may not do damage. They will also still take damage from the boss. 
function healMe() {
	var randomPlayerDamageRange = Math.floor((Math.random() * 50)); 
	var randomBossDamageCrit = Math.floor((Math.random() * 5)); 
	var attackDamage = 100 + randomPlayerDamageRange;
	var bossHitDamage = n * 100 + randomBossDamageCrit + 1;
	var playerHP = baseHP - bossHitDamage;
	var bossHP = bosses.health[n]
do {
	baseHP -= bossHitDamage;
	baseHP += 1000;
	document.querySelector(".basic-attack").innerHTML += bosses.name[n] + " hits you for " + bossHitDamage + " HP." + "<br>You heal for " + "1000 HP!<br>" + '<span style="color:#ff0043">' + "<br>Your HP: " + (playerHP + 1000) + "<br>Boss HP: " + bossHP + "</span><br><hr>";
if (playerHP <= 0) {
	var bossOrder = document.querySelector(".basic-attack").innerHTML += '<span style="color:#ff0043">' + "YOU HAVE BEEN DEFEATED! </span><br>Oh no, you failed!<br>" + playerHP + " HP<br>" + "Try Again!<br><hr>";

}} while (bossHP < 0);

document.querySelector(".boss").innerHTML = "Your HP: "+ '<span style="color:#fff">' + baseHP + "</span>" + "<br>" + bosses.name[n] + "'s  HP: " + '<span style="color:#fff">' + bosses.health[n] + "</span>";

}

// Bigger heal here to use as the boss damage increases.
function bigHeal() {
	var randomPlayerDamageRange = Math.floor((Math.random() * 50)); 
	var randomBossDamageCrit = Math.floor((Math.random() * 5)); 
	var attackDamage = 100 + randomPlayerDamageRange;
	var bossHitDamage = n * 100 + randomBossDamageCrit + 1;
	var playerHP = baseHP - bossHitDamage;
	var bossHP = bosses.health[n]
do {
	baseHP -= bossHitDamage;
	baseHP += 3000;
	document.querySelector(".basic-attack").innerHTML += bosses.name[n] + " hits you for " + bossHitDamage + " HP." + "<br>You heal for an " + '<span style="color:#ff0043">' + "INCREDIBLE " + "</span>3000 HP!<br>" + '<span style="color:#ff0043">' + "<br>Your HP: " + (playerHP + 3000) + "<br>Boss HP: " + bossHP + "</span><br><hr>";
if (playerHP <= 0) {
	var bossOrder = document.querySelector(".basic-attack").innerHTML +=  '<span style="color:#ff0043">' + "YOU HAVE BEEN DEFEATED! </span><br>Oh no, you failed!<br>" + playerHP + " HP<br>" + "Try Again!<br><hr>";
}} while (bossHP < 0);

document.querySelector(".boss").innerHTML = "Your HP: " + '<span style="color:#fff">' + baseHP + "</span><br>" + bosses.name[n] + "'s  HP: " + '<span style="color:#fff">' + bosses.health[n] + "</span>";
return;

}

// Bigger ability here as the bosses health increase. 
function ultimateAbility() {
	var randomPlayerDamageRange = Math.floor((Math.random() * 50)); 
	var randomBossDamageCrit = Math.floor((Math.random() * 5)); 
	var attackDamage = 500 + randomPlayerDamageRange;
	var bossHitDamage = n * 100 + randomBossDamageCrit + 1;
	var playerHP = baseHP - bossHitDamage;
	var bossHP = bosses.health[n] - attackDamage;
do {
	baseHP -= bossHitDamage;
	bosses.health[n] -= attackDamage;
	document.querySelector(".basic-attack").innerHTML += bosses.name[n] + " hits you for " + bossHitDamage + " HP." + "<br>You used your " + '<span style="color:#ff0043">' + "ULTIMATE " + "</span>ability to hit " + bosses.name[n] + " for " + attackDamage + " HP.<br>" + '<span style="color:#ff0043">' + "<br>Your HP: " + playerHP + "<br>Boss HP: " + bossHP + "</span><br><hr>";
if (bossHP <= 0) {
	var bossOrder = document.querySelector(".basic-attack").innerHTML += bosses.name[n++] + '<span style="color:#ff0043">' + " DEFEATED!" + "</span>" + bossHP + " HP<br>" + '<span style="color:#ff0043">' + "EXTREME" + "</span> Critical Strike! Next boss: " + bosses.name[n] + ": " + bosses.health[n] + " HP!<br><hr>";
}} while (playerHP < 0);

document.querySelector(".boss").innerHTML = "Your HP: " + '<span style="color:#fff">' + baseHP + "</span>" + "<br>" + bosses.name[n] + "'s  HP: " + '<span style="color:#fff">' + bosses.health[n] + "</span>";

	}


// Things I would have liked to add:
// A cap on player HP, as to not exceed a certain limit. 
// Another function to recognize once the player has reached the last boss and to end the game with a message rather than 'undefined'. I tried to do this but I could not figure out how to.
// An element that determines a bounds of high random critical hits and outputs that that hit was critical to the user.
// A cooldown/ limit on uses for the big heal and ultimate abilities to make it harder.

// Other things I struggled with and would change include: Separating the current boss HP from the base HP and displaying it x/y - because I used a function that directly subtracted from the base HP all I could get to show was x/x. I would also like to have added images for each boss that were replaced by a js function- however I couldn't figure that one out either and it cluttered my code more than it already is :D.




