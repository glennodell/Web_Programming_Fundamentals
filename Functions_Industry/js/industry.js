// JavaScript Document

//Glenn O'Dell 1/28/2014 functions_indrusrty

// I want to make a script the shows how often you change out lamps vs how many time you deal with a users issue

var lamps = prompt("How many lamps do you change out this week?");

var users = prompt("how many users do you assist this week?");

var total = function(lamps, users){
	var sum = lamps + users;
	return(sum);
}

var workorders = total(lamps, users);

console.log("you have gone on a total of " + workorders + " this week.")
