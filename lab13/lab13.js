/*
   lab.js
   Requirements: jQuery must be loaded for this script to work.
   Author: Kiah Foskey
   Date: November 15, 2024
*/
// Initialize the string to accumulate FizzBuzz results
let oneLongString = "";

for (let i = 1; i <= 100; i++) {
    // Handle multiple of 15 first (FizzBuzz)
    if (i % 15 === 0) {
        console.log("FizzBuzz");
        oneLongString += "FizzBuzz<br>";
    }
    // Handle multiple of 5
    else if (i % 5 === 0) {
        console.log("Buzz");
        oneLongString += "Buzz<br>";
    }
    // Handle multiple of 3
    else if (i % 3 === 0) {
        console.log("Fizz");
        oneLongString += "Fizz<br>";
    }
    // Handle numbers that are not multiples of 3 or 5
    else {
        console.log(i);
        oneLongString += i + "<br>";
    }
}

// jQuery to display the result in the HTML
$("#output").html(oneLongString);