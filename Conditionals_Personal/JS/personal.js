// JavaScript Document

//Glenn O'Dell 1/23/2104 Conditionals_Personal

//potluck at work

alert("potluck at work yay");

//what are you bringing

var Item = prompt("are you bringing chips or veggie tray")
if(Item == ""){
	alert("if your not going participate stop now")
}
if(Item == "chips"){ 
	console.log("chips are $2.99 a bag and you need 1 bag for every 3 people.")
}
if(Item == "veggie tray"){
	 console.log("veggie trays are 3.99 a tray and you need 1 for every 6 people")
}
// setting the price of items

var chips = 2.99

var veggieTray = 3.99

//how many people are going to be there

var people = prompt("how many people are attending")

if(people == ""){
	alert("well that is going to be a very lonely potluck")
}
(people <= 10) ? console.log("so its only gonna me " + people + " that wont be that expensive to buy the stuff") : console.log("wow with " + people + ", this might be expensive")

//calculate how much it will cost with the numer of people and how many of each will be needed.

var chipCost = people / 3 * chips

var veggiCost = people / 6 * veggieTray

var bagsofChips = people / 3

var traysofVeggie = people / 6

if(Item == chips){
	console.log("with " + people + " people there you will need and total of " + bagsofChips + " bags of chips and the cost of chips being " + chips + " you will have to spend a total of " + chipCost + " for the potluck.")
}else{
	console.log("with " + people + " people there you will need a total of " + traysofVeggie + " veggie trays and the cost of veggie trays being " + veggieTray + " you will have to spend a total of " + veggiCost + " for the potluck.")
}