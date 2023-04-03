'use strict';

function gradingStudents(grades) {

    let arr = [];
      
    for (let i = 0; i < grades.length; i++){
        if(grades[i] < 38){
          arr.push(grades[i]);
        }else if((grades[i] +1) % 5 === 0){
          arr.push(grades[i]+1);
        } else if((grades[i] +2) % 5 === 0){
          arr.push(grades[i]+2);    
        } else {
          arr.push(grades[i]);
        }
      }
      return arr;
    }