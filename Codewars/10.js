// Given an array of integers as strings and numbers,
// return the sum of the array values as if all were numbers.

// Return your answer as a number.

function sumMix(x) {
   var s = 0;
   for (let i = 0; i < x.length; i += 1) {
      s += Number(x[i]);
   }
   return s;
}

sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]);