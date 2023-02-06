const phoness = [
  {
    serial: 1,
    price: 10000,
    names: 'samsung'

  },
  {
    serial: 2,
    price: 110000,
    names: 'samsung'

  },
  {
    serial: 3,
    price: 1000,
    names: 'samsung'

  },
]

function baciphones(p){
  let chepeast= p[0]
for(let i = 0; i<p.length; i++){
  let phone = p[i]

if(phone.price>chepeast.price){
  chepeast = phone
}

}
return chepeast;
}


const selectPhone = baciphones(phoness)
console.log(selectPhone)

