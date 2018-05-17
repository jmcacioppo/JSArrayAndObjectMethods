"use strict";
exports.__esModule = true;
var moment = require("moment/moment");
var rightNow = moment().format('MMMM Do YYYY, h:mm:ss a');
console.log(rightNow);
// Concatentates two arrays
function concatTwoArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
exports.concatTwoArrays = concatTwoArrays;
// Fills entire array with desired value
function filterArray(arr, filter) {
    function checkNumber(num) {
        return num < filter;
    }
    return arr.filter(checkNumber);
}
exports.filterArray = filterArray;
