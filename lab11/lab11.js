/*
   lab.js

   Requirements: jQuery must be loaded for this script to work.

   Author: Kiah Foskey
   Date: November 11, 2024
*/


// Function to sort the string alphabetically
function sortString(inputString) {
    return inputString.split('').sort().join('');
}

$("#submit").click(function() {

    const user = $("#user").val();

    const userNameSorted = sortString(user);

    $("#output").append('<div class="text"><p>' + userNameSorted + '</p></div>');
});