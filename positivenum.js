// Write a function which takes an array of numbers as input and 
// returns a new array containing only the positive numbers in the given array.


// var array = [ -3, 0, 4, -1, 7];

// var positiveOnly = array.filter(function(element){
//     return element > 0;
// });
// console.log(positiveOnly);


var positiveOnly = function(array) {
    var filteredArray = array.filter(function(element) {
        return element > 0;
    });
    return filteredArray;
};
console.log(positiveOnly([-3, 4, 7, -5]));