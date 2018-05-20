"use strict";
exports.__esModule = true;
var moment = require("moment/moment");
var rightNow = moment().format('MMMM Do YYYY, h:mm:ss a');
console.log(rightNow);
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
