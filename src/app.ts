import * as moment from 'moment/moment';

var rightNow = moment().format('MMMM Do YYYY, h:mm:ss a');
console.log(rightNow);

var arr = [1, 2, 3, 4, 5];

export function sum(a, b) {
    return a + b;
}