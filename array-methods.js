// Task 1 - sort an array with numbers
const arrayNums = [7,101,3,1,9,11,100,111];
function sortArray(array) {
    let arr = array.sort(function(a, b){return a - b});// сортування + функція порівняння чисел
    console.log(arr);
    return(arr)
}
sortArray(arrayNums);

//Task 2 - filter an array of strings and keep only
// a string, that doesn't contain the word 'test'
const stringsArray = ['one-test', 'cat', 'parrot', 'banana', 'test-dog', 'dog'];
function filterStringsArray(array) {
    var array = array.filter(name => !name.includes('test'))
console.log (array);
return array;
}
filterStringsArray(stringsArray);

// Task 3 - find sum of numbers in array using .reduce()
const numsArray = [1, 3, 5, 10, 19, 100, 200, 33];
function sumNumbersInArray(array) {
var result = array.reduce(function(sum, current) {
    return sum + current;}); //https://learn.javascript.ru/array-iteration
    console.log(result);
    return result;
}
sumNumbersInArray(numsArray);

// Task 4 - filter items, where a > 5 and extend with
// new field *sum* with value a + b
const arrayItems = [
  { a: 1, b: 3 },
  { a: 3, b: 3 },
  { a: 6, b: 3 },
  { a: 10, b: 10 },
  { a: 41, b: 1 },
  { a: 0, b: 4 }
]
function filterAndExtendArrayItems(array) {
    var array = array.filter(array => array.a >= 5);
    // var sum = 4
    // var array = [...array, sum] 
    array.map((obj) => {
        obj.sum = obj.a + obj.b;                        //ПОЛУЧИЛООООООООООООООООООСЬ!
        // https://coderoad.ru/48953461/%D0%9A%D0%B0%D0%BA-%D0%B4%D0%BE%D0%B1%D0%B0%D0%B2%D0%B8%D1%82%D1%8C-%D1%81%D0%B2%D0%BE%D0%B9%D1%81%D1%82%D0%B2%D0%BE-%D0%BA-%D0%BA%D0%B0%D0%B6%D0%B4%D0%BE%D0%BC%D1%83-%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D1%83-%D0%BC%D0%B0%D1%81%D1%81%D0%B8%D0%B2%D0%B0-%D0%B2-typescript 
        // or via brackets // obj['sum'] = 2;
        return obj;
    })
console.log (array);
return array;
}
filterAndExtendArrayItems(arrayItems);

// Task 5 - merge arrays and remove duplicates
const arNum = [1, 2, 3, 4, 5, 6];
const arNum2 = [15, 6, 3, 20, 11];
function mergeArraysWithoutDuplicates(array1, array2) {
//console.log(array1.concat(array2));
//return(array1.concat(array2));
console.log([...new Set([...array1 ,...array2])]);
return([...new Set([...array1 ,...array2])]);
}
mergeArraysWithoutDuplicates(arNum, arNum2);