function maxNumber(numbers){

  let maxNuber = numbers[0]
  for(let i = 0; i<numbers.length; i++){
    const index = i;
    const number = numbers[index]

    if(number>maxNuber){
      maxNuber = number;
    }
  }
  return maxNuber;

}


const numbersArray = [123, 345, 567, 678, 980]
const myNumber = maxNumber(numbersArray)
console.log(myNumber)