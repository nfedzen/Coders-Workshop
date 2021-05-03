#!/usr/bin/env node

const coinFlip = n => {
  counter = 0
  while(n > 1){
    n = n/2
    counter++
  }
  return counter
};


console.log(coinFlip(190892)); // 9
