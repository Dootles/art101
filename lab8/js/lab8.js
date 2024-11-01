// index.js - complete lab 8
// Author: Kiah Foskey
// Date: 1 November

function isEven(x){
    return (x % 2 == 0);
}
//test function
console.log("Is 1 even? ", isEven (1));
console.log("Is 2 even?", isEven (2));

array = [100, 81, 92, 4, 16, 19, 10001, 192, 103]
console.log("My Array", array);

var result = array.map(isEven);
//should return [true, false, true, true, true, false, false, true, false]
console.log("Test of evenness array:", result);

var result = array.map(function(x){
    return x ** 0.5;
})
// should return 100, 81, 92, 4. 16, 19, 10001, 192, 103

console.log("Squareroot of array:", result);
