// Створити об*єкт 
let obj = {a: "hi", b: 3.14159265, c: true, d: undefined, e: null, f: NaN};
console.log (obj);

// Створити масив
let arr = [1.1 , "hey", null, false, NaN, undefined];
console.log(arr);

// Витягнути елемент з масиву по індексу
let array = ["e2-e4", "e4-e2", true, 0.0, null];
console.log(array[0]);

// ЗНайти останній елемент в масиві
let mas = ["first", "second", "third", "second last", "last"]
console.log(mas[4]);
console.log(mas[mas.length-1]);


// Отримати значення об*єкта по ключу
let object = {key1: null, key2: "one", key3: 2.33333333333333}
console.log(object.key3);

// Функція з сумою
function nameFn () {
let a=1, b=2;
let sum = a + b;
console.log(sum)
return sum;
}
nameFn()

// Функція суми параметрами
function fn (c, d) {
    let sum = c + d;
    console.log(sum)
    return sum;
    }
    fn(1, 2);

// Стрілочна  функція параметрами
var strila = (x, y) => {
    sum = x + y;
console.log(sum);
}
strila (100, 200);

// Стрілочна  функція без параметрів
let a1 = 1000000, a2 = 2000000;
var strilka = () => {
    suma = a1 + a2;
console.log(suma);
}
strilka();

// FOR
for (var i = 0; i <= 5; i++) {
    console.log (i);
}

// Витягнути елемент з рядка по індексу
let str = "qwerty"
console.log(str.charAt(str.length-1));