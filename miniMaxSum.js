'use strict';

function miniMaxSum(arr) {
    let sorted = arr.sort();
  
    let minimum = sorted[0]+sorted[1]+sorted[2]+sorted[3];
    let maximum = sorted[4]+sorted[1]+sorted[2]+sorted[3];
  
    let holding = [];
  
    holding.push(minimum);
    holding.push(maximum);
    
    return holding.join(" ");
  
  }