/*Consider a sequence of integers that is constructed in the following manner:
Start with any positive integer as the only term in the sequence While the last term in the sequence is not equal to 1 do If the last term is even then Add another term to the sequence by dividing the last term by 2 using floor division Else Add another term to the sequence by multiplying the last term by 3 and adding 1

The Collatz conjecture states that this sequence will eventually end with one when it begins with any positive integer. 
Although this conjecture has never been proved, it appears to be true.
Create a program that reads an integer, n, from the user and reports all of the values in the sequence starting with n and ending with one. 
Your program should allow the user to continue entering new n values (and your program should continue displaying the sequences) until the user enters a value for n that is less than or equal to zero.

The Collatz conjecture is an example of an open problem in mathematics.
 While many people have tried to prove that it is true, no one has been able to do so. 
 Information on other open problems in mathematics can be found on the Internet.*/

let userInput = Number(prompt("Type a positive integer or a integer equal or lower than 0 to stop the program: "))
let sequenceNumber = [];
let placeholder;

while (userInput > 0) {
  
  const check = userInput % 2;

    if (userInput == 1) {
    alert(`${sequenceNumber}`)
    sequenceNumber = [];
    userInput = Number(prompt("Insert another number: "))
      
    } else if (check == 0) {
    placeholder = userInput /= 2;
    sequenceNumber.push(placeholder);
    userInput = placeholder;
      
  } else if (check == 1) {
    placeholder = userInput * 3 + 1;
    sequenceNumber.push(placeholder);
    userInput = placeholder;
  } 
} 