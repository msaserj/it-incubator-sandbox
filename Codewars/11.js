// Given a non-empty array of integers, return the result of
// multiplying the values together in order.


function grow(x) {
   var s = 1;
   x.forEach(function (entry) {
      s *= entry;
   });
   console.log(s);;
}

grow([1, 2, 3]);