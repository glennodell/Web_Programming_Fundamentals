// JavaScript Document

//Glenn O'Dell 1/28/2014 functions_indrusrty

// when building a website as part of a team how the work load need to be balanced

// people vs pages

var people = prompt("how many people are on your team");

var pages = prompt("how many pages are required to complete the web site to the customers standards");

(people <= pages) ? console.log("well everyone needs to be doing more than one page for sure") : console.log("Well it looks like this will be easier with more people than pages");

//average number of pages each person is responsible for

function average(people , pages){
	var total = pages / people
	console.log("looks like everyone needs to do a total of " + total + " page/s to complete the project");
}

average(people, pages)

var js = prompt("does the customer want a lot of javascript");

if(js = yes){
	var java = function(){
		if(people >= 10){
			console.log("you need to make 2 people do all the Javascript")
		}else{
			console.log("you need to make 5 people do all the Javascript")
		}
	}
}

