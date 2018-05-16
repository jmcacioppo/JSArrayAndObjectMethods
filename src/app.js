"use strict";
exports.__esModule = true;
var moment = require("moment/moment");
var rightNow = moment().format('MMMM Do YYYY, h:mm:ss a');
console.log(rightNow);
var arr = [1, 2, 3, 4, 5];
function sum(a, b) {
    return a + b;
}
exports.sum = sum;
