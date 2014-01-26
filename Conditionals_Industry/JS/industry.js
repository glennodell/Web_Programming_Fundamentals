// JavaScript Document

// Glenn O'Dell 1/23/2014 Conditionals_Industry


//in my job we have to replace lamps in projectors and judging by how many we have in stock and how many hours have been used on the lamp tells us when we can change them.

var projector = prompt("is the projector a canon or a panasonic")

if(projector == ""){
	alert("no projector selected please start over.")
}

// what type and how many hours for each
if(projector == "canon"){
	console.log("you need a canon 7585 lamp to replace that lamp they are normally good for 2000 hours.")
}
if(projector == "panasonic"){
	console.log("You need a 60-AW lamp to replace that lamp and they are normally good for 4000 hours.")
}

var canon = 2000

var panasonic = 4000
// calculate how many hours the projector lamp can still be used

var hoursUsed = prompt("how many hours did the " + projector + " have one it?")

if(projector == "canon" && hoursUsed >= canon){
	console.log("check inventory to see if you can replace canon 7585 lamp")
}
if(proector == "panasonic" && hoursUsed >= panasonic){
	console.log("check inventory to see if you can replace the 60-AW lamp")
}

// need to to check the inventory