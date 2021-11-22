// const array = [11, 2, 101, 3, 4, 5, 1, 6];
// function sortArray() {
//     array.sort (function (a, b) {
//     return a - b;
//     })
//     console.log(array);
//     return array;
// }
// sortArray();

// Task 4 - filter items
// new field *sum* with value a + b
const arrayItems = [
    { a: 1, b: 3 },
    { a: 3, b: 3 },
    { a: 6, b: 3 },
    { a: 10, b: 10 },
    { a: 41, b: 1 },
    { a: 0, b: 4 }
  ]

let arrExt = [];
// arrayItems.forEach((item) => {
//   arrExt.push({
//     a: item.a,
//     b: item.b,
//     sum: item.a + item.b,
//   })
// });
// console.log(arrExt);


   function filterAndExtendArrayItems(array) {
       let result = array.filter(array => array.a >= 5);
       console.log(result);
        result.forEach((element) =>
          arrExt.push({
            a: element.a,
            b: element.b,
            sum: element.a + element.b,
          })
        )
      console.log(arrExt);
       return arrExt;
  }
   filterAndExtendArrayItems(arrayItems);

