// index.js - complete lab 6
// Author: Kiah Foskey
// Date: 24 October

//define variables
myTransport= ["bus metro", "Uber", "rides from friends", "hitchhike", "walk"];

myMainRide = {
  make: "bus",
  model: "metro",
  color: "blue",
  year: 2016,
  age: function() {
    return 2022 - this.year;
  }
}

document.writeln("Kinds of transportation I Use:", myTransport, "</br>");
document.writeln("My Main Ride: <pre>",
  JSON.stringify(myMainRide, null, '\t'), "</pre>");
