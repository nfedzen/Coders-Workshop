let gameOne = () =>{
  let rolls = 0
  let rolling = true

  while(rolling){
    let min = Math.ceil(1);
    let max = Math.floor(7);
    let number = Math.floor(Math.random() * (max - min) + min);
    

    if(number === 5){
      let secondNumber = Math.floor(Math.random() * (max - min) + min);
      if(secondNumber === 6){
        rolls++
        rolling = false
      } else {
        rolls++
      }
    }else{
      rolls++
    }
  }
  return rolls
}


let gameTwo = () =>{
  let rolls = 0
  let rolling = true

  while(rolling){
    let min = Math.ceil(1);
    let max = Math.floor(7);
    let number = Math.floor(Math.random() * (max - min) + min);
    

    if(number === 5){
      let secondNumber = Math.floor(Math.random() * (max - min) + min);
      if(secondNumber === 5){
        rolls++
        rolling = false
      } else {
        rolls++
      }
    }else{
      rolls++
    }
  }
  return rolls
}



let count = 0
let gameOneResults = 0
while(count < 10000){
  gameOneResults = gameOneResults + gameOne()
  count++
}
console.log("gameOne: " + (gameOneResults / 10000))

count = 0
let gameTwoResults = 0

while(count < 10000){
  gameTwoResults = gameTwoResults + gameTwo()
  count++
}
console.log("gameTwo: " + (gameTwoResults / 10000))