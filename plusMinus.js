'use strict';

function plusMinus(arr) {
    let holding = [];
    let positive = 0;
    let zero = 0;
    let negative = 0;
    
    for (let i = 0; i < arr.length; i++){
      if (arr[i] < 0){
          negative++
      }
       if (arr[i] > 0){
          positive++
      }
       if (arr[i] === 0){
          zero++
      }
    }
  
    let first = positive/arr.length;
    let second = negative/arr.length;
    let third = zero/arr.length;
  
    first = first.toFixed(6);
    second = second.toFixed(6);
    third = third.toFixed(6);
      
    holding.push(first);
    holding.push(second);
    holding.push(third);
    
    console.log(holding.join("\n"));
  }