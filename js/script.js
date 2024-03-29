const arr1 = [1, 2, 3, [1, 2, 3, 4, [2, 3, 4]]];
const arr2 = [1, 2, 3, 4, 5];
function flatten(input) {
  const stack = [...input];
  const res = [];

  if (arguments.length > 1) {
    throw new Error(
      "Function accepts only 1 argument, too much arguments provided"
    );
  }

  while (stack.length) {
    // забираем последнее значение
    const next = stack.pop();
    if (Array.isArray(next)) {
      stack.push(...next);
    } else {
      res.push(next);
    }
  }
  //разворачиваем массив, чтобы восстановить порядок элементов
  return res.reverse();
}
console.log(flatten(arr1));
// [1, 2, 3, 1, 2, 3, 4, 2, 3, 4]
//[1, 2, 3, 4, 5]

const flatRealize = [
  [0, 1],
  [2, 3],
  [4, 5],
].reduce((a, b) => a.concat(b));
console.log(flatRealize);

const flatSingle = (arr) => [].concat(...arr);
console.log(flatSingle([1, 2, 3, [1, 2, 3, 4, 2, 3, 4]]));

const arr3 = [1, 2, 3, [1, 2, 3, 4, [2, 3, 4]]];
function flattenSecond(array) {
  const flattend = [];
  if (arguments.length > 1) {
    throw new Error(
      "Function accepts only 1 argument, too much arguments provided"
    );
  }
  (function flat(array) {
    array.forEach(function (el) {
      if (Array.isArray(el)) {
        flat(el);
      } else {
        flattend.push(el);
      }
    });
  })(array);
  return flattend;
}

console.log(flattenSecond(arr3));
