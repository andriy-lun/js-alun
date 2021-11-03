var x = 0.1;
var y = 0.2;
var sum = x + y;//test2-test3-commit
console.log (sum);
console.log (typeof sum);
const pi = 3.14159265;
console.log (pi*2);
var name = "Andriy";
console.log (name + 2);
console.log (name + 3);
var letter1 = "A";
var letter2 = "a"
var digit = 2;
var strdigit = "2";
var res1 = letter1 == letter2;
var res2 = letter1 === letter2;
var res3 = digit == strdigit;
var res4 = digit === strdigit;
console.log (res1, res2);
console.log (res3, res4);

// functions
var varName = function (paramName) {
return ("hi " + paramName)
}
console.log (varName('Andy').toUpperCase() + "!");

var varName2 = function () {
    var varName3 = "Andre";
    return function () {
        console.log ("How are you, " + varName3 + "?");
    }
}
varName2 ()();

//objects
var objName = {
    nic: "Venom",
    age: 1000,
    human: false
};
console.log(objName);
console.log(objName.nic);
objName.age = 1500;
objName.IQ = "highest";
console.log(objName);

var objName2 = new Object ();
objName2.nic = "Tanos";
objName2.age = 2000;
objName2.human = false;
objName2.IQ = "hight";
console.log(objName2);

var objName3 = Object.create({nic: "Thor", age: 500, human: false, IQ: "hight"});//?
console.log(objName3);//?
