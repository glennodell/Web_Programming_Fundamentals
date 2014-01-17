// JavaScript Document
// Glenn O'Dell 1-16-2014 expressions_wacky

var name = prompt("What is your name mortal??");

var class = prompt("What is your class, Tiny human");

var hit = prompt("How hard can you hit \n 1-20");

var health = prompt("How much can you take \n 1-40");

var armor = prompt("how much armor do you have on \n 1-30");

var bossH = prompt("Number of epicness \n 1-20 please");

var bossHit = prompt("number of greatness /n 1-20 please");

alert("The tiny humans name is " + name + "huh \n and its a " + class + " I see");

var bad = health + armor;

var good = hit;
alert("your total health is " + bad + " with your armor and you deal " + good +" damage a hit.");

var boss = ("The creature has " + bossH + " health, and hits for " + bossHit + " a hit");

var uDie = bossHit / bad;

var itDie = good / bossH;

alert("it will take the boss " + uDie + " to kill you, or if he lets you " + itDie + " turns for you to kill it.");

