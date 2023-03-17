// not a valid solution. Need to figure out how to separate out the multiple inputs (in an array) and then process them individually)
function processData(input) {

    console.log(input.trim());
    
    let splitted = input.split('');
    let arr = [];
    
    for(let i = 4; i < splitted.length; i++){
      if(splitted[0] === 'S' && splitted[2] === 'M'){
        if(splitted[i] === '(' || splitted[i] === ')'){
          arr.push('');
        }
        
        else if(/[A-Z]/.test(splitted[i])){
          arr.push(' ');
          arr.push(splitted[i].toLowerCase());
        }
  
        else {
          arr.push(splitted[i]);
        };
  
        if(i === splitted.length-1){
        console.log(arr.join(''));
        }
      };
  
  // _______________________________
      if(splitted[0] === 'S' && splitted[2] === 'V'){
        if(/[A-Z]/.test(splitted[i])){
          arr.push(' ');
          arr.push(splitted[i].toLowerCase());
        }
    
        else {
          arr.push(splitted[i]);
        }
        
        if(i === splitted.length-1){
        console.log(arr.join(''));
        }
      };
  // _______________________________
      if(splitted[0] === 'S' && splitted[2] === 'C'){
        if(/[A-Z]/.test(splitted[i])){
          arr.push(' ');
          arr.push(splitted[i].toLowerCase());
        }
    
        else {
          arr.push(splitted[i]);
        }
        
        if(i === splitted.length-1){
          console.log(arr.join(''));
        }
      };
  // _______________________________
      if(splitted[0] === 'C' && splitted[2] === 'M'){
        if(splitted[i] === ' '){
          i++;
          arr.push(splitted[i].toUpperCase())
        }
  
        else {
          arr.push(splitted[i]);
        }
        if(i === splitted.length-1 && splitted[0] === 'C' && splitted[2] === 'M'){
          arr.push('()')
          console.log(arr.join(''));
        }  
      };
  
  // _______________________________
      if(splitted[0] === 'C' && splitted[2] === 'V'){
        if(splitted[i] === ' '){
          i++;
          arr.push(splitted[i].toUpperCase())
        }
  
        else {
          arr.push(splitted[i]);
        }
        
        if(i === splitted.length-1){
          console.log(arr.join(''));        
        }
      };
  // _______________________________
      if(splitted[0] === 'C' && splitted[2] === 'C'){
        if(i === 4){
          arr.push(splitted[i].toUpperCase())
          i++
        }
        
        if(splitted[i] === ' '){
          i++;
          arr.push(splitted[i].toUpperCase())
        }
  
        else {
          arr.push(splitted[i]);
        }
        
        if(i === splitted.length-1){
          console.log(arr.join(''));   
        }
      }
    }
  };