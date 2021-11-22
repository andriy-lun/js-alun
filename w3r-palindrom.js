// function Palindrome (word) {
//     if (word === (word).split('').reverse().join('')) {
//     console.log(true);
//     } else {console.log(false);}
// }
// Palindrome("z az");

// Tasks 6 - check, if string is palindrome
// and return "The string is palindrome"
// or "The string is not palindrome"
let text = "qweewq";
function palindromeValidator(str) {
    let textRev = "";
    for (var i = str.length-1; i >= 0; i--) {
        textRev += str[i];
    };
    if (str === textRev) {
        console.log("The string is palindrome")
    } else {console.log("The string is not palindrome")};
    console.log (textRev);
}
palindromeValidator(text);