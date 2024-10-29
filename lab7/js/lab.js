// index.js - complete lab 7
// Author: Kiah Foskey
// Date: 28 October

function sortName() {
    // user input for name
    var userName = window.prompt("What's ur name? Feel free to add your SSN too!");
    console.log("userName =", userName);
    // name to array
    var nameArray = userName.split('');
    console.log("nameArray =", nameArray);
    // sort array
    var sortedArray = nameArray.sort();
    console.log("sortedArray =", sortedArray)
    // array to string again
    var nameSorted = sortedArray.join('');
    console.log("nameSorted =", nameSorted);
    // single line: userName.split('').sort().join('')
    return nameSorted;
}

//output
document.writeln("Here's your new identity!: ", sortName(), "</br>")
