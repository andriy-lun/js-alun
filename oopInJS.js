//CLASSES
class Animal {
    constructor(name) {
    this.name = name;
    }
    say() {return "";}
}
console.log("\n", Animal);

class Cow extends Animal {
    constructor(name) {
        super(name);
    }
    say() {
        console.log ("Mooooo");
        return "Mooooo";
    }
}

class Pig extends Animal {
    constructor(name) {
        super (name);
    }
    say() {
        console.log("Weeeee")
        return "Weeeee"
    }
}

class Ship extends Animal {
    constructor(name, clone, alive) {
        super(name);
        this.clone = clone;
        this.alive = alive;
    }
    say() {
        console.log ("Beeeee");
        return "Beeeee"
    };
}

const Milka = new Cow ("Milka");
Milka.say();
const Peppa = new Pig ("Peppa");
Peppa.say();
const Dolly = new Ship ("Dolly", true, false);
Dolly.say();
console.log(Dolly.clone, Dolly.alive, "\n");

//Prototype
function Fly(name, color) {
    this.name = name;
    this.color = color;
}
Fly.prototype.run = function () {
    console.log("I’m flying");
};
Fly.prototype.sound = function () {
    console.log("Zzzzzzzzzzz");
};
   
const Tsetse = new Fly("Tsetse", "gray");
Fly.prototype.run();
const Tsukotuha = new Fly("Tsukotuha", "black");
Fly.prototype.sound();
console.log(Tsetse.color, Tsukotuha.color, "\n");
 
//Execution context
const x = 1;
function fn() {
   const y = 2;
    function sum() {
         const z = 3;
        const output = x + y + z;
        console.log(output, "\n");
        return output;
    }
    console.log(sum);
    return sum; 
}
fn()();

//Bind
obj = {
    x: 1000,
    getX: function() {
      return this.x;
    }
};
const a1 = obj.getX;
console.log(a1()); //undefined
const a2 = a1.bind(obj);
console.log(a2); //[Function: bound getX]
console.log(a2(), "\n"); //1000
  
//Apply
const numbers = [300, 600, 200, 3, 7000];
const min = Math.min.apply(null, numbers);
console.log(min);// 3
const max = Math.max.apply(null, numbers);
console.log(max);// 7000

//Call
function Employee (name, salary) {
    this.name = name;
    this.salary = salary;
  }
  function param(name, salary) {
    Employee.call(this, name, salary);
    this.category = 'param';
  }
  console.log(new param('NEW', 30000).name);// "NEW"
  