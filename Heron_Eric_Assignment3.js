// Eric Heron
// SDI TERM 1409
// Project 3


// Global Variables
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


// Boolean function with arguments and boolean logic(randomNum1 = 5 or greater and randomNum2 = 10 or greater) = true, otherwise false
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

// Number function with arguments
var math1 = function(firstNum, secondNum){
	var subtract = firstNum - secondNum;
	
// Number return then output
	console.log(subtract + " pet is a lot of work.");
}
// Calling of Number function
math1(4, 3);

// Another number function
var math2 = function(num1, num2){
	var add = num1 + num2;
	
// Number return then output
	console.log("So you can imagine the amount of work needed for " + add + " pets!");
	console.log("Feeding the pets is one of the simple tasks.");
}
// Calling of Number function
math2(3, 1);

//While loop and another nested conditional.
var needsFood = 4;
while (needsFood > 1){
	console.log(needsFood + " pets need to eat!");
	needsFood--;
	if (needsFood === 1){
		console.log(needsFood + " pet needs to eat.");
	}
}
console.log("All the pets have been fed.");

// String function
var myString = function(nameOfPet, petAge){
	console.log(nameOfPet + " is " + petAge + " years old.");
	if (petAge === 1){
		console.log("He's just a baby!");
	}
}
// String return
myString("Number Two", 8);
myString("Murphy", 2);
myString("Neilon", 1);
myString("Sam", 1);

// Nested loop
for (numberOfPets = 4; numberOfPets > 0 ;numberOfPets--){
	for (numberOfNaps = 4; numberOfNaps > 0; numberOfNaps--){
	console.log(numberOfPets + " pets need a bath. " + numberOfPets + " pets need a nap.");
	}
}
// Returned after loops have stopped
console.log("All pets have had their baths and they have all napped.");











// (Back) This instructs the user on how to return to the beginning
} else {
	console.log("Please refresh to start over.");
}
// This code will run if the user types no.
} else {
	console.log("Thanks for stopping by!");
}

