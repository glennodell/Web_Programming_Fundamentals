// Glenn O'Dell 1-16-2014 expressions_wacky

var name =prompt("What is your name mortal??");

var hit =prompt("How hard can you hit \n any number");

var health =prompt("How much can you take \n any number");

var armor =prompt("how much armor do you have on \n any number");

var bossH =prompt("Number of epicness \n any number please");

var bossHit =prompt("number of greatness \n any number please");

var THP = (health + armor)

var boss = ("The creature has " + bossH + " health, and hits for " + bossHit + " a hit");

var uDie = THP / bossHit;

var itDie = bossH / hit;

alert("You have a total of " + THP + "hit points. \n and the boss has a total of " + bossH + " hit points")

console.log("it will take the boss " + uDie + " to kill you, or if he lets you " + itDie + " turns for you to kill it.");

alert("You are probably going to die sorry " + name + ". \n But do not worry mortal change the numbers and try agian.")