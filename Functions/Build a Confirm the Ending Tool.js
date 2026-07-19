/*
Build a Confirm the Ending Tool
In this lab, you will implement a function that checks if a string ends with the given target string.

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

You should create a function named confirmEnding that takes two parameters: the string to check and the string to check against.
The function should return true if the first string ends with the second string, and false otherwise.
You should not use the .endsWith() method; instead, use one of the JavaScript substring methods to achieve this.
*/

function confirmEnding(string, ending){
  if(string.slice(string.indexOf(ending, string.length/2)) == ending){
    return true
  }else
    return false
}
let string = "Bastian"
console.log(confirmEnding(string, "n"))

console.log(confirmEnding("Congratulation", "on"))