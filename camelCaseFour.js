function processData(input) {

  let firstSplit = input.split(/\r?\n/)
  let holding = [];
  
  for (let h = 0; h < firstSplit.length; h++){
  let arr = [];
    
    let splitted = firstSplit[h].split('');

    for(let i = 4; i < splitted.length; i++){
      if(splitted[0] === 'S' && splitted[2] === 'M'){
        if(splitted[i] === '(' || splitted[i] === ')'){
          arr.push('');
        }
        
         else if(/[A-Z]/.test(splitted[i]) && i === 4){
          arr.push(splitted[i].toLowerCase());
        }
           
        else if(/[A-Z]/.test(splitted[i]) && i !== 4){
          arr.push(' ');
          arr.push(splitted[i].toLowerCase());
        }

  
        else {
          arr.push(splitted[i]);
        };
  
        if(i === splitted.length-1){
        holding.push(arr.join(''));
        }
      };
      // ____________________________
      if(splitted[0] === 'S' && splitted[2] === 'V'){
        if(/[A-Z]/.test(splitted[i]) && i === 4){
          arr.push(splitted[i].toLowerCase());
        }
        
        else if(/[A-Z]/.test(splitted[i]) && i !== 4){
          arr.push(' ');
          arr.push(splitted[i].toLowerCase());
        }
    
        else {
          arr.push(splitted[i]);
        }
        
        if(i === splitted.length-1){
           holding.push(arr.join(''));
        }
      };
  // _______________________________
      if(splitted[0] === 'S' && splitted[2] === 'C'){
        if(/[A-Z]/.test(splitted[i]) && i === 4){
          arr.push(splitted[i].toLowerCase());
        }
          
          else if(/[A-Z]/.test(splitted[i]) && i !== 4){
          arr.push(' ');
          arr.push(splitted[i].toLowerCase());
        }
    
        else {
          arr.push(splitted[i]);
        }
        
        if(i === splitted.length-1){
          holding.push(arr.join(''));
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
          holding.push(arr.join(''));
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
          holding.push(arr.join(''));       
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
          holding.push(arr.join(''));  
        }
      }
    }
  };

  for (let i = 0; i < holding.length; i++){
    console.log(holding[i]);
  }
};