//export 
function sayHelloWorld() {
    return "Hello, World!";
}
console.log(sayHelloWorld());

function sayHello(name) {
    return ("Hello, " + name);
}
console.log(sayHello("Andy!"));

function sumNumbers(a, b) {
    return (a+b);
}
console.log(sumNumbers(4, 10));

function valueByKeyInObject(key, obj = {}) {
    const provObj = Object.assign({}, obj);
    provObj[key] = "test@mail.com";
    return provObj[key];
//    return obj[key];
}
console.log(valueByKeyInObject());

const girl = {Name: "Alice"};
function extendObject(key, value, obj = {}) {
  const newDataExt = Object.assign({}, obj);
  newDataExt [key] = value;
  return newDataExt;
}
const addAge = extendObject("Age", 10, girl);
const girl2 = extendObject("Age", 10);
const girl3 = Object.assign({girl, girl2});
console.log(girl);
console.log(addAge);
console.log(girl2);
console.log(girl3);
function increaseBiggerArg(a, b) {
    if (a >= b) {
      a = a * 2;
      return a;
    } else {
      b = b + a;
    return b}
  }
  console.log(increaseBiggerArg(10, 7));
  console.log(increaseBiggerArg(10, 77)); 

  function calculateFigureArea(figureType, a, b) {
      if (figureType === "circle") {
          return 3,14159265*a*a; 
        } else if (figureType === "square") {
          return a*a;
        } else {return a * b;}
    }
  console.log(calculateFigureArea ("circle", 10));
  console.log(calculateFigureArea ("square", 10));
  console.log(calculateFigureArea ("rectangle", 10, 5));
