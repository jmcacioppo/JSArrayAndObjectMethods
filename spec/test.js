const arrayFunctions = require('../src/app');

test('concat [1, 2, 3] + [4, 5, 6] to equal [1, 2, 3, 4, 5, 6]', () => {
    expect(arrayFunctions.concatTwoArrays([1,2,3], [4,5,6])).toEqual([1,2,3,4,5,6]);
});

test('check if every item in [1, 3, 5] is less than 4', () => {
    expect(arrayFunctions.checkEveryItem([1, 3, 5], 4)).toEqual(false);
});

test('filter [1, 3, 9] so nothing is less than 5', () => {
    expect(arrayFunctions.filterArray([1, 3, 9], 5)).toEqual([1, 3]);
});

test('find first number in [1, 3, 9] that is less than 3', () => {
    expect(arrayFunctions.findIndexOfValue([1, 3, 9], 3)).toEqual(1);
});

test('join ["a", "b", "c"] to equal "a,b,c"', () => {
    expect(arrayFunctions.joinArray(["a", "b", "c"])).toEqual("a,b,c");
});

test('square each num in [2, 4, 9] to equal [4, 16, 81]', () => {
    expect(arrayFunctions.squareEachNumber([2, 4, 9])).toEqual([4, 16, 81]);
});

test('add each num in [1, 3, 9] to equal 13', () => {
    expect(arrayFunctions.sumOfNumbers([1, 3, 9])).toEqual(13);
});

test('slice [1, 3, 9, 13] to equal [3, 9]', () => {
    expect(arrayFunctions.sliceArray([1, 3, 9, 13])).toEqual([3, 9]);
});

test('sort [3, 2, 4, 1] to equal [1, 2, 3, 4]', () => {
    expect(arrayFunctions.sortArray([3, 2, 4, 1])).toEqual([1, 2, 3, 4]);
});