/*
   lab.js - this simple javascript/jquery script appends new elements to an output div
   Requirements: jQuery must be loaded for this script to work.

   Author: Kiah Foskey
   Date: Nov 8th 2024
*/

function generateRandomText() {
    const text = "Grandma got ran over by a raindeer! and I saw it happen.";
    const min = 3;
    const max = 100;
    const randLen = Math.floor(Math.random() * (max - min + 1)) + min;

    const randStart = Math.floor(Math.random() * (text.length - randLen + 1));

    return text.slice(randStart, randStart + randLen);
  }

// click listener for button
$("#talkie").click(function(){
});
