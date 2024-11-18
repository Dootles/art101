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
    // Get the value from the input field when the button is clicked
    const user = $("#user").val();

    // Now let's sort the string
    const userNameSorted = sortString(user);

    // Append a new div to the output div with the sorted name
    $("#output").append('<div class="text"><p>' + userNameSorted + '</p></div>');
});