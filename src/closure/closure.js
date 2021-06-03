// CLOSURE


const moneyBox = (coins) => {
  var saveCoins = 0;
  saveCoins += coins;
  console.log(saveCoins) 
}

moneyBox(7)



const moneyBox = () => {
  saveCoins = 0;
  const countCoins = (coins) => {
    saveCoins += coins;
    console.log(`la plata socio es ${saveCoins}`);
  }
  return countCoins;
}

let myBox = moneyBox()

myBox(3)
myBox(7)
myBox(15)
