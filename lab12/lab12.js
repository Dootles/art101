/*
   lab.js
   Requirements: jQuery must be loaded for this script to work.
   Author: Kiah Foskey
   Date: November 15, 2024
*/

function sortingHat(num) {
    let remainder = num % 4;  // Calculate remainder based on num
    let str = "";  // Initialize str to avoid overwriting it

    if (remainder == 0) {
        str = "House of Willow Creek: Suburban Territory...";
    } else if (remainder == 1) {
        str = "House of Forgotten Hallow: Vampire Territory";
    } else if (remainder == 2) {
        str = "House of Windenburg: Strangely British...";
    } else if (remainder == 3) {
        str = "House of Chestnut Ridge: Cowboy Country";
    }

    return str;
}

$("#button").click(function() {
    let name = $("#input").val();  // Get input from user
    console.log(name);
    let nameLength = name.length;  // Get length of the input string
    console.log(nameLength);
    let house = sortingHat(nameLength);  // Call sortingHat with the length of the name
    console.log(house);
    $("#output").html("<h1>" + house + "</h1>");  // Display the house in the output div
     // Create a new <p> element and append it to #output
     $("#output").append("<p>" + house + "</p>");
});