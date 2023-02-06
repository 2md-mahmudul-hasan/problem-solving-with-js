function foobar(numbers){
  for(let i=1; i<=numbers; i++){
    let mynumber = i;
    if(mynumber % 3 === 0 && mynumber % 5 === 0){
      console.log('foo + bar ')
    }else if(mynumber % 3 === 0 ){
      console.log('foo')
    }else if(mynumber % 5 === 0 ){
      console.log('bar')
    }
    else{
      console.log(mynumber)
    }

  }
}

const n = foobar(100)
console.log(n)