
let positionInAlphabet = (letter) => {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  let splitAlphabet =  alphabet.split('')
  let counter = 1
  let move = true
  while(move){
    if(splitAlphabet[counter - 1] === letter){
      move = false
    } else {
      counter++
    }
  }
  return counter
}

console.log(positionInAlphabet('z'))
