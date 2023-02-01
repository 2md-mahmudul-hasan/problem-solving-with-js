// 1. Calculate Sum of all numbers of an array

function sumOfOddNumbers(oddNumbersArray){
  let sum = 0;
  for(let i = 0; i<oddNumbersArray.length; i++){
    let index = i;
    let element = oddNumbersArray[index]
    // console.log(index, element)
    sum = sum+element;
  }
 console.log(sum)
}



const myNumbers = [1,2,3,4,5,6,7,8,9]
sumOfOddNumbers(myNumbers)
