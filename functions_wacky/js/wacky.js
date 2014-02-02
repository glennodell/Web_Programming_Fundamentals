// JavaScript Document

// Glenn O'Dell 1/30/2014 function_wacky

// dragonball z vs mode

var goodBad = prompt("do you want to be a good or bad")

if(goodBad === "good"){
		var who = prompt("pick from Goku Gohan or Vegeta")
		var vs = prompt("pick from Cell, Frieza, Buu to fight agianst")
		if(who === "Goku"){
			alert("of course you wanted to be Goku")
			console.log("your power level is one million")
		}
		if(who === "Gohan"){
			console.log("your power level is 500000")
		}
		if(who === "Vegeta"){
			console.log("your power level is 900000")
		}
}

if(goodBad === "bad"){
	var who = prompt("pick from Cell, Frieza, Buu")
	var vs = prompt("pick from Goku Gohan or Vegeta to fight agianst.")
		if(who === "Cell"){
			console.log("your power level is 450000")
		}
		if(who === "Frieza"){
			console.log("your power level is 800000")
		}
		if(who === "Buu"){
			console.log("your power level is 900000")
		}
}
		
var player = function(){
	if(who === "Goku"){
		var power = 1000000
	}
	if(who === "Gohan"){
		var power = 500000
	}
	if(who === "Vegeta"){
		var power = 900000
	}
	if(who === "Cell"){
		var power = 450000
	}
	if(who === "Frieza"){
		var power = 800000
	}
	if(who === "Buu"){
		var power = 900000
	}
}
var boss = function(){
	if(vz === "Goku"){
	var power = 1000000
	}
	if(vs === "Gohan"){
		var power = 500000
	}
	if(vs === "Vegeta"){
		var power = 900000
	}
	if(vs === "Cell"){
		var power = 450000
	}
	if(vs === "Frieza"){
		var power = 800000
	}
	if(vs === "Buu"){
		var power = 900000
	}
}

alert("its " + who + " vs " + vs + "!!!")

if(player > vs){
	alert("YOU WIN!!!")
}else{
	alert("YOU LOSE! try again")
}
