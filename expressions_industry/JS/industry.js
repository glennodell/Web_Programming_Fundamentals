// JavaScript Document

//Glenn O'Dell 1-16-2014 expressions_industry

// I work as tech support on a military base and we contantly have to do inventory and add computers to rooms thought this would help this make sense.

var rooms = prompt("How many rooms are you building")

var computers = prompt("how many stations in each room")

var monitors = prompt("how many monitors are at each station")

var number = [rooms, computers, monitors]

var totalC = number[0] * number[1]

var totalM = totalC * number[2]

var mice = totalC

var powerCables = totatlM + totalC

console.log("You will need a total of " + totalC + " computers, and a total of " + totalM + " monitors to complete these rooms. Also you will need at total of " + mice + " mice and keyboards you will also need " + powerCables + " powercables one for each computer and on for each monitor.")

