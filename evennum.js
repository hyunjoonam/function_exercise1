// Write a function which takes an array of numbers as input and 
// returns a new array containing only the even numbers in the given array.


// var array = [0, 4, 6, 7, 11];

// var evenNumberOnly = array.filter(function(element){
//     return element % 2 == 0;
// });
//console.log(evenNumberOnly);

var evenNumbers = function(array) {
    var evenNumberOnly = array.filter(function(element){
        return element % 2 == 0;
    });
    return evenNumberOnly;
};

console.log(evenNumbers([0, 3, 4, 7, 10]));