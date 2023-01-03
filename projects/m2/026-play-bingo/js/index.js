// Import the functions of exercise 25 checking win bingo card
const bingo = require('./utils');
const prompt = require('prompt-sync')();
const alert = require('alert');

// Default node.js module to clone an object.
//Useful below for the function
const v8 = require('v8');
const structuredClone = obj => {
  return v8.deserialize(v8.serialize(obj));
};

// I create obj bingo card
const objBingoCard = {
  B: bingo.createBingoCard(1, 15, 5),
  I: bingo.createBingoCard(16, 30, 5),
  N: bingo.createBingoCard(31, 45, 5),
  G: bingo.createBingoCard(46, 60, 5),
  O: bingo.createBingoCard(61, 75, 5),
};

// loop for check line win bingo card
function objCardWin(obj) {

let counter = 0
let boolean = false;

  while (boolean === false) {
  
  const numberExtract = bingo.changeNumberExtract(75, 1, obj)
  
    if (bingo.checkHorizontalBingo(numberExtract)) {
      boolean = true
      
    } else if (bingo.checkDiagonalBingo(numberExtract)) {
      boolean = true;
      
    } else if (bingo.checkVerticalBingo(numberExtract)) {
      boolean = true;
      
    } else {
      counter += 1;
    }
  } return counter
}

// I create an array with all the calls of a winning folder
function getArrayWinCalls(obj, times) {
  const arrayNumberCalls = [];

  for (let i = 0; i < times; i++ ) {
    
    const cloneObj = structuredClone(obj)
    arrayNumberCalls.push(objCardWin(cloneObj))
   
  }
  return arrayNumberCalls
}

// main Program
const time = prompt("How many games do you want to play? ");

const arrayNumberCalls = getArrayWinCalls(objBingoCard, time);
const minNumberCalls = Math.min(...arrayNumberCalls);
const maxNumberCalls = Math.max(...arrayNumberCalls);
const avarageCalls = Math.round(bingo.getSumArray(arrayNumberCalls) / arrayNumberCalls.length);

alert(`Total games played: ${time}\nMinimum numbers called for victory: ${minNumberCalls}\nMaximum numbers called for victory: ${maxNumberCalls}\nAverage plays to get to the win: ${avarageCalls}`)
