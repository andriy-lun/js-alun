//-----------------------------------------------------
const s = "LOOP"; // WHILE  
//-----------------------------------------------------

var z = 0; 
var text = "";
while (z < 7) {
    text = "The number is " + z;
    z++;
    console.log (text);
}

var weekDays = ["SUNDAY", "MONDAY", "TUESDAY", "WENSDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
let y = 0;
while (y < weekDays.length) {
console.log(weekDays[y]);
y++;
}

//task1
const arrayNums1 = [7,101,3,1,9,11,100,111] // 343
const arrayNums2 = [90,101,3,1,69,11,10,111]// 396
function SumNumsInArrays () {
    const resArr = arrayNums1.concat(arrayNums2);
    var sum = 0;
    for (var i = 0; i<resArr.length; i++) {
        sum += resArr[i];
    }
    return sum;
}
SumNumsInArrays(arrayNums1, arrayNums2);
console.log(SumNumsInArrays());

//task2
let n;
let row = "";
function printEvenNumbers(n) {
    for (var i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            row += i + ", ";
        }
    }
    
    return (row.slice(0, -2));
}   
printEvenNumbers(22);
console.log(row.slice(0, -2));

//Task3
const arr = [  43, "what", 9, true, "cannot", false, "be", 3, true  ];
let arr2 = []; 
function reverseArrayItems(array) {
    for (var i = 0; i < arr.length; i++) {
         arr2[(arr.length-1)-i] = arr[i]    
        }
    
    console.log (arr2);
    return (arr2);
}
reverseArrayItems();

//Task 4
const array1  = [4, 6, 7, 10];
const array2  = [8, 1, 9, 20];
let pairSumArr = [];
function sumNumsSamePosition(array1, array2) {
    for (var i = 0; i < array1.length; i++) {
        pairSumArr[i] = array1[i] + array2[i];
    }
    console.log(pairSumArr);
    return pairSumArr
}
sumNumsSamePosition(array1, array2);

//Task 5 
const array = [4, 6, 7, 10];
let i = 0;
let suma = 0;
function sumNums(array) {
  while (i < array.length) {
    suma += array[i]; 
    i++;
  }
  console.log (suma);
  return suma;
}
sumNums(array);

// Task 6 - filter array of string using 'for' or 'while' loop
// and keep only elements where length > 4 and without the word 'error'
const strArr = ['error01', 'in a galaxy', 'start-error', 'far far', 'away', '0994-error'];
let filterArr = [];
function filterArrayWithStrings(array) {
    for (var i = 0; i < array.length; i++) {
        if (!array[i].includes("error") && array[i].length >= 4) {
            filterArr.push(array[i]);
        }
    }
    console.log(filterArr);
    return filterArr;
}
filterArrayWithStrings(strArr);

// Task 7 - given a number n calculate the factorial of
// the number using 'for' or 'while' loop
// n! => 1*2*3*4*5

function factorial(m) {
    let f = 1;
    for ( var i = 1; i <= m; i++ ) {
    f = f * i;
    }
    console.log (f);
    return f;
}
factorial(5);
// console.log(arr.reverse())
// reverseArrayItems();