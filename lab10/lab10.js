/*
   lab.js - this simple javascript/jquery script appends new elements to an output div
   Requirements: jQuery must be loaded for this script to work.

   Author: Kiah Foskey
   Date: Nov 8th 2024
*/
// Function to generate random text from a predefined string
function generateRandomText() {
  const text = "Grandma got ran over by a reindeer! and I saw it happen.";
  const min = 3;
  const max = 100;
  const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
  // Get a random starting index to slice the text
  const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
  // Generate the random text slice
  return text.slice(randStart, randStart + randLen);
}

// Click listener for the button
$("#talkie").click(function() {
  // Generate random text when the button is clicked
  const newTextGenmeow = generateRandomText();
  
  // Append the random text as a new div inside the output container
  $("#output").append('<div class="text"><p>' + newTextGenmeow + '</p></div>');
});
