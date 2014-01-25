// JavaScript Document

// Glenn O'Dell	1/23/2104 Conditionals_Wacky

//player needs to pick a weapon

var weapon = prompt("Do you use a sword or a warhammer?");

if(weapon === "")
	
	console.log("Its dangerous to go alone you might need to pick one")

if(weapon == "sword"){
	
	console.log("Your sword is made out a metal you have never seen before and feels to light to be real")

}

if(weapon == "warhammer"){
	
	console.log("Your Warhammer is a lot light than it looks and it is covered in symbols you have never seen before.")
	
	}
	
// having the user enter an amount for damage
	
var damage = prompt("your " + weapon + " does how much damage? \n 1-100")
if(damage == ""){
	alert("if you dont do any damage then your not going to make it very far")
}
// letting the player know what kind of damage and how much they will be doing
if(damage == ""){
	alert("you do nothing... You stand there and do nothing.")
}else{
alert("You do " + damage + " Holy damage per hit")
}

if(damage == 100){
	alert("Really think you're a big man now huh...... Cheater")
	}
if(damage <= 50){
	console.log("It will take you a while to kill any thing")
}else{
	console.log("Oh look a heavy hitter")
}
// have the player pick there health
var hitPoints = prompt("Your health \n 1-200")

console.log("Your heath is " + hitPoints + ".")

// picking their enemy and also letting the player know how much health each has.

var Enemy = prompt("Do you want to fight a skeleton or a zombie")

var skeleton = 300

var zombie = 500

//how the damage effects the enemies

if(Enemy ==""){
	alert("if you didnt want to fight a monster then why are you playing the game")
}
if(Enemy == "Skeleton"){
	console.log("The Skeleton has 300 hit points")
	}
if(Enemy == "zombie"){
	alert("the zombie has 500 health")
}
if(Enemy == "Skeleton" && weapon == "warhammer"){
	console.log("Your warhammer does X2 damage")
}

if(Enemy == "zombie" && weapon == "Sword"){
	console.log("Your sword does X2 damage")
}