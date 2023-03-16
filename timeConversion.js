'use strict';

function timeConversion(s) {
    let sd = s.split('');
    
    let answer = [];
  
      if(sd[8] === 'A' && sd[1] === '2'){
      answer.push(0);
      answer.push(0);
      answer.push(sd[2]);
      answer.push(sd[3]);
      answer.push(sd[4]);
      answer.push(sd[5]);
      answer.push(sd[6]);
      answer.push(sd[7]);
    }
    
      else if(sd[8] === 'A'){
      answer.push(sd[0]);
      answer.push(sd[1]);
      answer.push(sd[2]);
      answer.push(sd[3]);
      answer.push(sd[4]);
      answer.push(sd[5]);
      answer.push(sd[6]);
      answer.push(sd[7]);
    }
  
      else if(sd[8] === 'P' && sd[0] === '1' && sd[1] === '2'){
      answer.push(12);
      answer.push(sd[2]);
      answer.push(sd[3]);
      answer.push(sd[4]);
      answer.push(sd[5]);
      answer.push(sd[6]);
      answer.push(sd[7]);
    }
        
      else if(sd[8] === 'P' && sd[1] < 8 && sd[0] === '1'){   
      answer.push(22+Number(sd[1]));
      answer.push(sd[2]);
      answer.push(sd[3]);
      answer.push(sd[4]);
      answer.push(sd[5]);
      answer.push(sd[6]);
      answer.push(sd[7]);
    }
  
  
      else if(sd[8] === 'P' && sd[0] === '1'){
      answer.push(12+Number(sd[1]));
      answer.push(sd[2]);
      answer.push(sd[3]);
      answer.push(sd[4]);
      answer.push(sd[5]);
      answer.push(sd[6]);
      answer.push(sd[7]);
    }
  
      else if(sd[8] === 'P' && sd[1] < 8){
      answer.push(12+Number(sd[1]));
      answer.push(sd[2]);
      answer.push(sd[3]);
      answer.push(sd[4]);
      answer.push(sd[5]);
      answer.push(sd[6]);
      answer.push(sd[7]);
    }
  
      else if(sd[8] === 'P' && sd[1] >= 8){
      answer.push(12+Number(sd[1]));
      answer.push(sd[2]);
      answer.push(sd[3]);
      answer.push(sd[4]);
      answer.push(sd[5]);
      answer.push(sd[6]);
      answer.push(sd[7]);
    }
      
   return answer.join('');
  }