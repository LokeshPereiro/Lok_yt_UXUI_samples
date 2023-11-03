// --- Step 1 ---------------------------------------------------------
// Apply the map() function so that it returns every element of the array `myArray` multiplied by 2.
// Example invocation:
var numbers = [1, 2, 3, 4];
var result1 = numbers.map(step1);
// console.log(result1);

function step1(arr) {
  // TODO: Implement
  return arr * 2;
}

// --- Step 2---------------------------------------------------------
// Apply the map() function to the variable `str` so that every other word in the string is uppercase.
// Example invocation:
var str = "hello world how ya doing?";
var splitWords = str.split(" ");
var result2 = splitWords.map(step2);
// console.log(result2);

function step2(str) {
  // TODO: Implement
  return str.toUpperCase();
}

// ---Step 3----------------------------------------------------------------
// Remove all negative numbers from the array using filter function

// Example invocation:
var numbers = [-2, -1, 0, 1, 2];
var result3 = step3(numbers);
console.log(result3);

function step3(numbers) {
  // TODO: Implement
  return numbers.filter((positiveNums) => positiveNums >= 0);
}

// --- Step 4 ----------------------------------------------------------------
// Find the largest number in the array using reduce function
// Example invocation:
var numbers = [1, 2, 3, 4, 9, 145];
var result4 = step4(numbers);

// console.log(result4);

function step4(numbers) {
  // TODO: Implement
  return numbers.reduce((prev, cur) => {
    return prev > cur ? prev : cur;
  });
}
