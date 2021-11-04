//-----------------------------------------------
const a = "DATA TYPES AND VARIABLES";
//-----------------------------------------------
const b = "PRIMITIVES";
//-----------------------------------------------
console.log("\n" + a + "\n\n" + b);
var c = 0.123456789;                    //number
let d = 10000000000; //number
let e = "chars & 77"                    //string;
const f = false; //boolean
const g = true;                         //boolean
var h = undefined;
var i;                                  //undefined
const j = null;
                                        //null
console.log(typeof c, typeof e, typeof f, typeof i, j);
console.log(!f==g);
console.log(0==false);
console.log(0===false);
console.log(typeof(d + e), (d + e));
console.log(typeof(e + d), (e + d));
let k = 0;
let m = "0";
console.log (m==k);
console.log (m===k);

/*
lesson 2
*/
//-----------------------------------------------------
const tern = "TERNARY";
//-----------------------------------------------------
const oper = "OPERATORS";
    oper !== tern                             // CONDITION
    ? console.log("\n" + tern + " " + oper)   // if TRUE
    : console.log("never printed");           // if FALSE
console.log("\ncondition ? true : false")

//-----------------------------------------------------
const p = "CONDITION"; // IF ELSE  
//-----------------------------------------------------
console.log("\n" + p + " IF ELSE" + "\ntemperature state of the H2O");
let t = 15;
 0 < t < 100;
 if (t < 0) {
    console.log (('SOLID ICE').toLowerCase());
} else if (t > 100) {
    console.log(('VAPOR GAS').toLowerCase());
} else {
    console.log(("LIQUID WATER").toLowerCase());
};

//-----------------------------------------------------
const r = "CONDITION"; // SWITCH  
//-----------------------------------------------------
console.log("\n" + r + " SWITCH")
const seasonNum = 4;
let season = "";
switch (seasonNum) {
    case 1: {
        season = "winter";
        console.log (season);
    }
    break;
    
    case 2: {
        season = "spring";
        console.log (season);
    }
    break;

    case 3: {
        season = "summer";
        console.log (season);
    }
    break;

    case 4: {
        season = "autumn";
        console.log (season);
    }
    break;
    
    default: {
        console.error("Please input № from 1 to 4");
    }
}

//-----------------------------------------------------
const s = "COMMENTS"; /* ... */   // ...
//-----------------------------------------------------
/* - this line is ignored by js;
 this line is also ignored by js 
 because inside special symbol /* and */

// - only this line is ignored by js because of the 2 slashes (//)
console.log ("\n" + s);
console.log (" 2 slashes // - oneline comment;"
            + "\n 2 special char /*  start multilinecomment"
            + "\n 2 special char */ finish multilinecomment");

//-----------------------------------------------------
const u = "COMPARISON & ASSIGMENT OPERATORS"
//-----------------------------------------------------

console.log("\n" + u);

console.log(" =     x =  y    x = y");
console.log("+=     x += y    x = x + y");
console.log("-=     x += y    x = x - y");
console.log("/=     x /= y    x = x / y");
console.log("*=     x *= y    x = x * y");
console.log("**=    x**= y    x = x** y");
console.log("%=     x %= y    x = x % y");

var z0 =  0, z1 =  1,  z2 = 2;
var t0 = "", t1 = "1";
console.log(z0==t0); // +
console.log(z0===t0);// -
console.log(z1!=t1); // -
console.log(z1!==t1);// +
console.log(z0<z1);  // +
console.log(z0<=z1); // -
console.log(z0>z0);  // +
console.log(z0>=z0); // +

console.log("\nГАРНОГО ДНЯ!\n");
// 2**7