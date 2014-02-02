// JavaScript Document

//Glenn O'Dell 1/29/2014 Functions_personal

//deciding what kind of food are you going to eat and if eating in or out

var where = prompt("are you eating in or out");
var howMany = prompt("how many people")

	function home(){
		console.log("well i hope that the " + howMany + " can agree on it.")
	}
	function out(){
		console.log("well i hope that the " + howMany + " are paying for their own")
		}
if(where === "in"){
	var meal = prompt("Beef, chicken or pork")
	home()
	}
if(meal === "Beef"){
	console.log("beef dinner will cost 1.25 per person")
	var beef = 1.25
	var sum = howMany * beef
	alert("your dinner will cost you a total of $" + sum + ".")
}
if(meal === "chicken"){
	 console.log("chicken dinner will cost 1.75 per person")
	 var chicken = 1.75
	var sum = howMany * chicken
	alert("your dinner will cost a total of $" + sum + ".")
			 }
if(meal === "pork"){
	 console.log("pork dinner will cost 1.15 per person")
	 var pork = 1.15
	 var sum = howMany * pork
	 alert("your dinner will cost a total of $" + sum + ".")
		}
if(where === "out"){
	var meal = prompt("burgers, chinese or italian")
	home()
	}
if(meal === "burgers"){
	console.log("burgers will cost 4.65 per person")
	var burgers = 4.65
	var sum = howMany * burgers
	alert("your dinner will cost you a total of $" + sum + ".")
}
if(meal === "chinese"){
	 console.log("chinese will cost 7.75 per person")
	 var chinese = 7.75
	var sum = howMany * chinese
	alert("your dinner will cost a total of $" + sum + ".")
			 }
if(meal === "italian"){
	 console.log("italian will cost 9.95 per person")
	 var italian = 9.95
	 var sum = howMany * italian
	 alert("your dinner will cost a total of $" + sum + ".")
		}



