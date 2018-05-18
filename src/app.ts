import * as moment from 'moment/moment';

var rightNow = moment().format('MMMM Do YYYY, h:mm:ss a');
console.log(rightNow);

interface TwoArrays {
    (arr1: Array<number>, arr2: Array<number>): Array<number>;
}

// Concatentates two arrays
export var concatTwoArrays: TwoArrays = 
    (arr1, arr2) => arr1.concat(arr2);

export function checkEveryItem(arr: Array<number>, filter: number) {
    function checkNumber(num: number) {
        return num < filter;
    }
    
    return arr.every(checkNumber);
}

// Fills entire array with desired value
export function filterArray(arr: Array<number>, filter: number): Array<number> {
    function checkNumber(num: number) {
        return num < filter;
    }
    
    return arr.filter(checkNumber);
}