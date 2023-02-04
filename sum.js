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
  let price = 0;
  for(let i = 0; i<phoneArray.length; i++){
    phoneprice = phoneArray[i].price;
    price = price+phoneprice;
  }
  return price;
}

const myPhonePrice = chepeastPhone(phones)
console.log(myPhonePrice)