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

var AC = prompt("Armor rating \n 1-50")

console.log("Your heath is " + hitPoints + " and your armor is " + AC + ".")

var total =[hitPoints, AC]

var maxHealth = total[0] + total[1]

console.log("with your armor you have a maximun of " + maxHealth + " health.")

