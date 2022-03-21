

function evaporator(content, evap_per_day, threshold) {
   var i = 0;
   var day = content;
   while (day >= content * threshold / 100.0) {
      day = day * (1 - evap_per_day / 100.0);
      i++;
   }
   return i;
}