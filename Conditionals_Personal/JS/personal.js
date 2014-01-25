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

