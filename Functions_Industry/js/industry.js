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
// do they want java script

var js = prompt("does the customer want a lot of javascript");

if(js = "yes"){
	function java(){
		if(people >= 10){
			var sum = people - 2
			console.log("you need to make 2 people do all the Javascript, you now have " + sum + " people working on the site.")
		}else{
			var sum = people - 5
			console.log("you need to make 5 people do all the Javascript, now have " + sum + " people working on the site")
		}
	}
}

java()

var time = prompt("how many days till the site has to be up and running")

var average = pages / time

console.log("you need to complete a total number of " + average + " pages a day to complete your project on time.");
