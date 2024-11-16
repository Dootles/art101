/*
   lab.js
   Requirements: jQuery must be loaded for this script to work.
   Author: Kiah Foskey
   Date: November 15, 2024
*/

function sortingHat(str){

let remainder = num % 4;
str = ""


if (remainder == 0) {
    str = "House of Willow Creek: Suburban Territory...";}
else if (remainder == 1) {
        str="House of Forgotten Hallow: Vampire Territory";
    }
    else if (remainder == 2) {
        str = "House of Windenburg: Strangley British...";
    }
    else if (remainder == 3){
        str = "House of Chestnut Ridge: Cowboy Country";
    }
return str;
}

$("#button").click(function(){
    let name = $("#input").val()
    console.log(name);
    let nameLength = name.length
    console.log(nameLength);
    let house = getHouse(nameLength)
    console.log(house);
    $("#output").html("<h1>" + house+ "</h1>");
})