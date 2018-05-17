const arrayFunctions = require('../src/app');

test('concat [1, 2, 3] + [4, 5, 6] to equal [1, 2, 3, 4, 5, 6]', () => {
    expect(arrayFunctions.concatTwoArrays([1,2,3], [4,5,6])).toEqual([1,2,3,4,5,6]);
});

test('filter array so nothing is less than 5', () => {
    expect(arrayFunctions.filterArray([1, 3, 9], 5)).toEqual([1, 3]);
});