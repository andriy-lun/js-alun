// Task 2 - add new field sum, that should contain sum of fields a + b
const objWithSum = {
    a: 10,
    b: 10
  };
  let sum = objWithSum.a + objWithSum.b;
  objWithSum.sum = sum;
  console.log(objWithSum);