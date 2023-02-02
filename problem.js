// // 1. Calculate Sum of all numbers of an array

// function sumOfOddNumbers(oddNumbersArray){
//   let sum = 0;
//   for(let i = 0; i<oddNumbersArray.length; i++){
//     let index = i;
//     let element = oddNumbersArray[index]
//     // console.log(index, element)
//     sum = sum+element;
//   }
//  console.log(sum)
// }

// function oddNumbers(arr){
// let myArr=[];
// for(i=0; i<arr.length; i++){
//   if(arr[i]!==0){
//     myArr.push(arr[i])
//   }
// }
// return myArr;

// }

// const myNumbers = [1,2,3,4,5,6,7,8,9]
// sumOfOddNumbers(myNumbers)


// 2. search String

const myName = 'mahmudul hasan'
// console.log(myName.includes('ha'))

console.log(myName.startsWith('ma'))


// swap variab
let a = 10 ; 
let b = 15;


console.log(a, b)

let c = a;
 a = b;
 b = c;
 console.log('swaap variable is', a, b);

//  3. Who get cake?

function getmax(a, b , c){
  myMaxNumber = Math.max(a, b, c);
  return myMaxNumber;
}

const mynumber = getmax(599, 8774, 44)


console.log(mynumber)