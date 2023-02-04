function names(namesArray){

  let uniqueName = []

  for(i=0; i<namesArray.length; i++){

    let name = namesArray[i];
   

    if(uniqueName.includes(name)===false){
      uniqueName.push(name)
    }
  }
  return uniqueName;

}

let myValue = names(['abul', 'kabul', 'babul', 'rabul','abul', 'kabul', 'babul', 'rabul','abul', 'kabul', 'babul', 'rabul','abul', 'kabul', 'babul', 'rabul'])

console.log(myValue)