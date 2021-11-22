// Tasks 1 -  convert array of strings
// from lowercase to uppercase
let arrLowCase = ["string1", "string2"]
// function convertToUppercase(array) {
//     for(var i = 0; i < array.length; i++){
//     array[i] = array[i].toUpperCase();
//     }
//     console.log(array);
//     return array;
// }
// convertToUppercase(arrLowCase);


//let a = String(array).toUpperCase().split(",");
    // альтернативний метод - 
    // String(array) масив в рядок через кому, 
    // toUpperCase() рядок в верхній регістр, 
    // split(",") рядок в масив, сепаратор елементів - кома

// function convertToUppercase2 (array) {
//     let a = String(array).toUpperCase().split(",");
//     console.log(a);
//     return a;
// }
// convertToUppercase2 (arrLowCase);

function convertToUppercase3 (array) {
let newarr = array.map(fn=>{ return fn.toUpperCase(); });
console.log(newarr);
return(newarr);
}
convertToUppercase3(arrLowCase);

// Task 2 - should calculate amount of provided letter in
// the provided string
// ('letter', 't') => 2
let word = "letter";
let char = "t";
function calculateLetters(string, letter) {
    let count = 0;
    for(var i = 0; i < string.length; i++) {
        if (string.charAt(i) === letter) {
        // if (string[i].includes(letter)) { - другий спосіб
            count++;
        };
    }    
    console.log(count);
    return count;
}
calculateLetters (word, char);

// Task 3 - replace numbers with spaces
// in the provided string
let slogan = 'I5like5JS'
function replaceNumbers(string) {
//     let noNumtr = "";
//     for(var i = 0; i < string.length-1; i++) {
//         noNumtr += string[i]
//         if ((string[i] - string[i]) === 0) {
//             string[i] = " ";
//         }
//     } 
    let noNum = string.split(""); //рядок - в масив
    for(var i = 0; i < noNum.length; i++) {
        if ((noNum[i] - noNum[i]) === 0) { //перевірка основана: "I" - "I" = NaN але "9" - "9" = 0
            noNum[i] = " ";  // заміна текстового числа на пробіл
        }
    }
    noNum = noNum.join("") //новий масив з пробілами замість чисел - в рядок
     console.log(noNum);
     return noNum;
}
replaceNumbers(slogan);

// Tasks 6 - check, if string is palindrome
// and return "The string is palindrome"
// or "The string is not palindrome"
 function palindromeValidator(str) {
    if (str === (str).split('').reverse().join('')) {
        console.log(true);
        } else {console.log(false);}
 }

// Task 5 - return a new string that should contain
// a letter taken by index argument from every string in array
// if index is bigger than string length - add space instead
let arr = ["osmos", "uterque", "water", "crop", "&", "swap", "cat", "brew", "Esmeralda"];
let idx = 1;
// result "star wars"
function buildStringUsingIndex(array, index) {
    let newWord = "";
    for (var i = 0; i < array.length; i++) {
        if (array[i].length <= index) {//чи довжина слова в масиві <= заданого індекса в слові?
            newWord += array[i].charAt(index) + " ";// додаєм пробіл
        } else {newWord += array[i].charAt(index);}//інакше не додаєм
    }
console.log (newWord);
return newWord;
}
buildStringUsingIndex(arr, idx);