var num1 = {
    sign: 1,
    nName: "один",
}
num1.nName = "one"; // rewrite value of the key(property) 
num1.even = false;  // add new key with boolean value
console.log(num1);

var num2 = {
    sign: 2,
    nName: "два",
}
num2.nName = "two";
num2.even = true;
console.log(num2);

var num3 = {
    sign: 3,
    nName: "три",
}
num3.nName = "three";
num3.even = false;
console.log(num3);

var num4 = {
    sign: 4,
    nName: "чотири",
}
num4.nName = "four";
num4.even = true;
console.log(num4);

var num5 = {
    sign: 5,
    nName: "п'ять",
}
num5.nName = "five";
num5.even = false;
console.log(num5);

var num6 = {
    sign: 6,
    nName: "шість",
}
num6.nName = "six";
num6.even = true;
console.log(num6);

var num7 = {
    sign: 7,
    nName: "сім",
}
num7.nName = "seven";
num7.even = false;
console.log(num7);

var num8 = {
    sign: 8,
    nName: "вісім",
}
num8.nName = "eight";
num8.even = true;
console.log(num8);

var num9 = {
    sign: 9,
    nName: "дев'ять",
}
num9.nName = "nine";
num9.even = false;
console.log(num9);

var num10 = {
    sign: 10,
    nName: "десять",
}
num10.nName = "ten";
num10.even = true;
console.log(num10);

if (num10.nName === "ten" && num10.sign === 10) { // condition for changing values of last object
    num10.nName = num10.nName.toUpperCase();
    num10.sign = "10";
} else {};
console.log("\nnew changes added:\n");
console.log(num10);

num10.even === true                             // condition for remoove and add new values of last object
    ? (delete num10.even, num10.odd = false)
    : console.log(num10.even);
console.log(num10);

console.log("\n Input № of OBJECT")
const number = 7
switch (number) {                               //condition SWITCH
    case 1: {
        console.log (num1);
    }
    break;
    
    case 2: {
        console.log (num2);
    }
    break;

    case 3: {
        console.log (num3);
    }
    break;

    case 4: {
        console.log (num4);
    }
    break;
    
    case 5: {
        console.log (num5);
    }
    break;
    
    case 6: {
        console.log (num6);
    }
    break;

    case 7: {
        console.log (num7);
    }
    break;
    
    case 8: {
        console.log (num8);
    }
    break;
    
    case 9: {
        console.log (num9);
    }
    break;
    
    case 10: {
        console.log (num10);
    }
    break;
    
    default: {
        console.error("Please input OBJECT № from 1 to 10");
    }
}
console.log ("\nHave a nice day!\n")