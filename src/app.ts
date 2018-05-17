import * as moment from 'moment/moment';

var rightNow = moment().format('MMMM Do YYYY, h:mm:ss a');
console.log(rightNow);

// Concatentates two arrays
export function concatTwoArrays(arr1: Array<number>, arr2: Array<number>): Array<number> {
    return arr1.concat(arr2);
}

// Fills entire array with desired value
export function filterArray(arr: Array<number>, filter: number): Array<number> {
    function checkNumber(num) {
        return num < filter;
    }

    return arr.filter(checkNumber);
}