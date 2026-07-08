/*
Build a Boolean Check Function
In this lab, you will build a function that checks if a value is classified as a boolean primitive.

Boolean primitives are true and false.

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

You should have a function called booWho that receives one argument.
If the argument received is a boolean primitive, the function should return true.
If the argument is any other value, the function should return false.
*/


function booWho(isBoolean){
  const result = isBoolean === true || isBoolean === false ? true : false
  return console.log(result)
}

let isBoolean = true
booWho(isBoolean)

isBoolean = false
booWho(isBoolean)

isBoolean = [1,2,3]
booWho(isBoolean)

isBoolean = [].slice
booWho(isBoolean)

isBoolean = {"a": 1}
booWho(isBoolean)

isBoolean = 1
booWho(isBoolean)

isBoolean = NaN
booWho(isBoolean)

isBoolean = "a"
booWho(isBoolean)

isBoolean = "true"
booWho(isBoolean)

isBoolean = "false"
booWho(isBoolean)