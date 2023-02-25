// 1. перепишите функцию через рекурсию

// function printArrayValues(arr) {
//     if (arr.length === 0) {
//         return;
// }
//     console.log(arr[0], 'array');
//     printArrayValues(arr.slice(1));
// }
// printArrayValues([1, 2, 3]);



// let arr = [4, 5, 6];
// let newArr = [1,2,3].concat(arr);

// for (let i = 7; i <= 10; i++) {
//     newArr.push(i);
// }
// console.log(newArr); 





// let arr = [1, 2, 3, 4, 5];
// let lastElement = arr[arr.length - 1];
// console.log(lastElement);






function countChar(str, symb) {
    const rexExp = new RegExp(symb);
    return rexExp.test(str);
  }
  console.log('loremipsumdolor'.match(/o/g));