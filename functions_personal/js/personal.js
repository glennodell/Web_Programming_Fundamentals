// JavaScript Document

//Glenn O'Dell 1/29/2014 Functions_personal

//deciding what kind of food are you going to eat and if eating in or out

var where = prompt("are you eating in or out");

function home(beef, chicken, pork){
		var what = prompt("Beef, chicken or pork")
		var howMany = prompt("how many people")
		if(howMany === 1){
			console.log("well atleast you dont have to get dressed.")
		}else{
			console.log("well i hope that the " + howMany + " can agree on it.")
		}
		if(what ==="Beef"){
			console.log("beef dinner will cost 1.25 per person")
			var beef = 1.25
			var sum = people * beef
			alert("your dinner will cost you a total of $" + sum + ".")
		 }
		 if(what === "chicken"){
			 console.log("chicken dinner will cost 1.75 per person")
			 var chicken = 1.75
			 var sum = people * chicken
			 alert("your dinner will cost a total of $" + sum + ".")
			 }
		if(what === "pork"){
			 console.log("pork dinner will cost 1.15 per person")
			 var pork = 1.15
			 var sum = people * pork
			 alert("your dinner will cost a total of $" + sum + ".")
			 }
	}

if(where === "in"){
	home
}
if(where === "out"){
	function out(){
		var where = prompt("chinese, Italian or Greek")
		var peopleGoing = prompt("how many people are going")
		if(peopleGoing === 1){
			console.log("if it is just you you should have stayed in tonight")
		}else{
			console.log("well i hope that the " + peopleGoing + " people can agree on one place")
		}
	}
}

		