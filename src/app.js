"use strict";
exports.__esModule = true;
var moment = require("moment/moment");
var rightNow = moment().format('MMMM Do YYYY, h:mm:ss a');
console.log(rightNow);
document.write(rightNow);
// Concatentates two arrays
exports.concatTwoArrays = function (arr1, arr2) { return arr1.concat(arr2); };
// Check every item to check if they all pass a condition
function checkEveryItem(arr, filter) {
    function checkNumber(num) {
        return num < filter;
    }
    return arr.every(checkNumber);
}
exports.checkEveryItem = checkEveryItem;
// Fills entire array with desired value
function filterArray(arr, filter) {
    function checkNumber(num) {
        return num < filter;
    }
    return arr.filter(checkNumber);
}
exports.filterArray = filterArray;
// Find index of value in array
function findIndexOfValue(arr, value) {
    return arr.indexOf(value);
}
exports.findIndexOfValue = findIndexOfValue;
// Join an array
function joinArray(arr) {
    return arr.join();
}
exports.joinArray = joinArray;
// Call function for each number in array
function squareEachNumber(arr) {
    function squareNumber(num) {
        return num * num;
    }
    return arr.map(squareNumber);
}
exports.squareEachNumber = squareEachNumber;
// Call function to reduce array to be sum of all numbers
function sumOfNumbers(arr) {
    function sum(total, num) {
        return total + num;
    }
    return arr.reduce(sum);
}
exports.sumOfNumbers = sumOfNumbers;
// Slice an array to get certain values
function sliceArray(arr) {
    return arr.slice(1, 3);
}
exports.sliceArray = sliceArray;
// Sort an array of numbers (ascending)
function sortArray(arr) {
    return arr.sort(function (a, b) { return a - b; });
}
exports.sortArray = sortArray;
