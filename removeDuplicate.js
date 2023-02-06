const names = ['ami', 'tumi', 'she','ami', 'tumi', 'she','ami', 'tumi', 'she' ]

function duplicateNames(namesArray){

  const myArray = []

  for(let i = 0; i<namesArray.length; i++){
    let name = namesArray[i];
    if(myArray.includes(name) == false){
      myArray.push(name)
    }
  }
  return myArray;
}

const uniqueName = duplicateNames(names)
console.log(uniqueName)
