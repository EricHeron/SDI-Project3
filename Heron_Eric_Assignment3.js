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
var myConfirm = confirm("How about we start with my cat named Two?");

// Confirm conditional
if (myConfirm === true){
	console.log("Number Two is the name of my cat. She was named after a character in the Austin Powers movies!");
	console.log("She has one eye and a docked tail! I like to call her my pirate bobcat.")
}

// Boolean function






// This code will run if the user types no.
} else {
	console.log("Thanks for stopping by!");
}

