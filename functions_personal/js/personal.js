// JavaScript Document

//Glenn O'Dell 1/29/2014 Functions_personal

//deciding what kind of food are you going to eat and if eating in or out

var where = prompt("are you eating in or out");
if(where === "in"){
	var home = function(beef, chicken, pork){
		var what = prompt("Beef, chicken or pork")
		var howMany = prompt("how many people")
			console.log("well i hope that the " + howMany + " can agree on it.")
		if(what === "Beef"){
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
}
