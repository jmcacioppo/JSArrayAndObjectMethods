import * as moment from 'moment/moment';
import '../css/style.css';

var rightNow = moment().format('MMMM Do YYYY, h:mm:ss a');
console.log(rightNow);
document.write(rightNow);

interface TwoNumArraysIntoOne {
    (arr1: Array<number>, arr2: Array<number>): Array<number>;
}

// Concatentates two arrays
export var concatTwoArrays: TwoNumArraysIntoOne = 
    (arr1, arr2) => arr1.concat(arr2);

// Check every item to check if they all pass a condition
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

// Find index of value in array
export function findIndexOfValue(arr: Array<number>, value: number): number {
    return arr.indexOf(value);
}

// Join an array
export function joinArray(arr: Array<string>): string {
    return arr.join();
}

// Call function for each number in array
export function squareEachNumber(arr: Array<number>): Array<number> {
    function squareNumber(num: number) {
        return num * num;
    }

    return arr.map(squareNumber);
}

// Call function to reduce array to be sum of all numbers
export function sumOfNumbers(arr: Array<number>): number {
    function sum(total: number, num: number) {
        return total + num;
    }

    return arr.reduce(sum);
}

// Slice an array to get certain values
export function sliceArray(arr: Array<number>): Array<number> {
    return arr.slice(1, 3);
}

// Sort an array of numbers (ascending)
export function sortArray(arr: Array<number>): Array<number> {
    return arr.sort((a, b) => a - b);
}