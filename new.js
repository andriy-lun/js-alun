// Task 1 - add new fields name with value "Felix", and age - 7
const objWithNewFields = {};
objWithNewFields.name = "Felix";
objWithNewFields.age = 7;
console.log(objWithNewFields);
// code here
// Task 1 - end

// Task 2 - correct the condition to have correct value in the res field
const objWithRes = {
  n: 3,
  res: ""
};
// code here
if (objWithRes.n < 3) {
  objWithRes.res = "n is less than 3";
} else if (objWithRes.n === 3) {
  objWithRes.res = "n is equal 3";
} else {
  objWithRes.res = "n is more than 3";
}
console.log(objWithRes);
// Tsk 2 - end

// Task 3 - rewrite nums array with [2,3] array
const objWithNums = {
  nums: [1]
};
objWithNums.nums = [2,3];
console.log(objWithNums);
// code here
// Tsk 3 - end
//export { objWithNewFields, objWithRes, objWithNums };

/*
https://codesandbox.io/s/js-array-basic-tasks-1vuy9?file=/src/basicTasks.js
*/