let a = 12345; //РЕВЕРС ЧИСЛА А МАСИВ
var arr1 = a.toString().split(''); // число в текст а потім в масив посимвольно
var arr2 = []; //декларуєм допоміжний масив для обернених символів
for (var i = 0; i < arr1.length; i++) {
     arr2[(arr1.length-1)-i] = arr1[i] 
//останньому елементу другого масиву (arr1.length-1) присвоюється нульовий (перший) елемент першого масиву
}
console.log("\nРозбитий текстовий масив з оберненого числа ", arr2);
var b = Number(arr2.join("")); // Перетворення в НОМЕР склеєного джоіном текстового масиву arr2
console.log("\nа це вже число", b, "\n");  

// пробуєм задачу без масиву
var text = a.toString(); //число в текст
var newText = "";//наша нова змінна для обертання, поки що текстова
console.log(text);
for (var i = text.length; i > 0; i--) {
    newText += text.substr(i-1,1); //останній елемент відрізається і присвоюється в якості першого змінній
}
newText = Number(newText); //Обернений текст в число
console.log("\nа це вже обернене число", newText, "\n");

// метод reverse
let x = 12345;
console.log(Number((a + "").split("").reverse().join("")));
// в Номер загортаєм... а + "" - число в текст, спліт - в масив посимвольно... реверс... джоін - склеювання