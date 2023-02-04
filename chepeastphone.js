const phones = [
  {name:'samsung',
  price:20000,
  country:'Bangladesh',
  },
  {name:'samsung',
  price:120000,
  country:'Bangladesh',
  },
  {name:'samsung',
  price:220000,
  country:'Bangladesh',
  },
];

function chepeastPhone(phoneArray){
  let chepphone = phoneArray[0]
  for(let i = 0; i<phoneArray.length; i++){
    phone = phoneArray[i]
    if(phone.price < chepphone){
      chepphone = phone
    }
  }
  return chepphone;
}

const myPhone = chepeastPhone(phones)
console.log(myPhone)