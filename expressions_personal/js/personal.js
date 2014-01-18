// JavaScript Document
// Glenn O'Dell 1-16-2014 expresions_personal

var tank = prompt("how many gallons of fuel can your car/truck hold")

var mpg = prompt("about how many miles per gallon")

var cost = prompt("how much is a gallon of gas")

var distance = tank * mpg

var pertank = cost * tank

alert("You can go " + distance + "per tank of fuel \n aEach tank will cost you " + pertank +".")