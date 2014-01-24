// JavaScript Document

// Glenn O'Dell	1/23/2104 Conditionals_Wacky


var weapon = prompt("Do you use a sword or a warhammer?");

if(weapon === "")
	
	console.log("Its dangerous to go alone you might need to pick one")

if(weapon == "sword"){
	
	console.log("Your sword is made out a metal you have never seen before and feels to light to be real")

}

if(weapon == "warhammer"){
	
	console.log("Your Warhammer is a lot light than it looks and it is covered in symbols you have never seen before.")
	
	}
	
var damage = prompt("your " + weapon + " does how much damage? \n 1-100")

alert("You do " + damage + " Holy damage per hit")

if(damage == 100){
	alert("Really think you're a big man now huh...... Cheater")
	}
if(damage <= 50){
	console.log("It will take you a while to kill any thing")
}else{
	console.log("Oh look a heavy hitter")
}

var hitPoints = prompt("Your health \n 1-200")

console.log("Your heath is " + hitPoints + ".")
var Enemy = prompt("Do you want to fight a skeleton or a zombie")

if(Enemy == "Skeleton" && weapon == "warhammer"){
	console.log("Your warhammer does X2 damage")
}
if(Enemy == "zombie" && weapon == "Sword"){
	console.log("Your sword does X2 damage")
}

var zombie = 400

var skeleton = 300

var perHit = damage / Enemy

console.log("perHit")