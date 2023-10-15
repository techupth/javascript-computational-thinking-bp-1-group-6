let numbers = [10, 20, 30];
let anotherNumbers = [2, 4, 6];

let result1;
let result2;
function addNumber(numbers, amount) {
  // Start coding here
  let sum = []
  for (let i=0; i < numbers.length; i++){
    sum.push(numbers[i]+amount);
  }
  return sum
};
result1 = addNumber(numbers, 10); // Output: [20, 30, 40]
result2 = addNumber(anotherNumbers, 2); // Output: [4, 6, 8]

console.log(result1);
console.log(result2);