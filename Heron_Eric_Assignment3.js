// Eric Heron
// SDI TERM 1409
// Project 3


// Variables
var pet1 = "cat";
var pet2 = "dog";
var pet3 = "bearded dragon";
var numberOfPets = 3;
var myPrompt;

// Prompt
var myPrompt = prompt("Would you like to hear about my pets?", "Type yes or no in lower case");

// If user types yes the console log will out put, "I have 3 pets!"
if (myPrompt === "yes"){
	console.log("I have " + numberOfPets + " pets!");

// Confirm
var myConfirm = confirm("Let me tell you about my 3 pets.");

// Confirm conditional
if (myConfirm === true){
	console.log("I love all of my pets!");
}

// Boolean function with arguments and boolean logic (randomNum1 = 5 or greater and randomNum2 = 10 or greater) = true, otherwise false
// If false, console.log will not display
var myBoolean = function(randomNum1, randomNum2){
	if (randomNum1 >= 5 && randomNum2 >= 10){

// Return boolean (Only if both numbers are true will the console log run.)
		console.log("We have a " + pet1 + ", a " + pet2 + " and a " + pet3 + ".");
	}
}
// Calling of the boolean function
myBoolean(10, 13);

// Array Argument
var petNames = ["Number Two", "Murphy", "Neilon"];

// Array Function and for loop with 3 nested conditionals
var myArray = function(){
for (var i = 0; i < petNames.length; i++){
	if (petNames[i] === "Number Two"){
		console.log(petNames[0] + " is my " + pet1);
	}
	if (petNames[i] === "Murphy"){
		console.log(petNames[1] + " is my " + pet2);
	}
	if (petNames[i] === "Neilon"){
		console.log(petNames[2] + " is my " + pet3);
	}
}
}
// Calling of Array function
myArray();

// Array Property
console.log("All " + petNames.length + " of my pets take a lot of responsibility.");

// Array Method
petNames.push("Sam");
var petSitting = petNames.pop();
console.log(petSitting + " is a kitten that my wife and I are watching for a friend. He is adorable.");












// This code will run if the user types no.
} else {
	console.log("Thanks for stopping by!");
}

