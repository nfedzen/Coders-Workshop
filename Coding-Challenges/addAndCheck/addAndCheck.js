#!/usr/bin/env node
class Object {
  constructor(){
    this.box = []
  }

  get(){
    return this.box
  }

  add(value) {
    this.box.push(value)
  }

  check(value) {
    let found = false
    this.box.forEach(number => {
      if(number === value){
        found = true
      }
    })
    return found
  }
}


let obj = new Object

obj.add(10)
obj.add(11)
obj.add(12)

console.log(obj.get())
console.log(obj.check(10))
console.log(obj.check(13))