/*
   lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page

   Requirements: jQuery must be loaded for this script to work.

   Author: Kiah Foskey
   Date: Nov 4th 2024
*/
// add button to challenge section
$("#challenge.minor-section").append("<button>But the button works now :D")
$("#challenge").click(function(){ $("#challenge").toggleClass("special");});