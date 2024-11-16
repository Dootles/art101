/*
   lab.js

   Requirements: jQuery must be loaded for this script to work.

   Author: Kiah Foskey
   Date: November 11, 2024
*/


function sortString(inputString) {
    return inputString.split('').sort().join('');
 

$("#submit").click(function(){
});

const user = $("#user").val();

// now let's sort it
userNameSorted = sortString(user);

// append a new div to our output div
$("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>'); }