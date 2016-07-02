'use strict';

/**
 * @ngdoc service
 * @name rockpaperscissorsgameApp.game
 * @description
 * # game
 * Factory in the rockpaperscissorsgameApp.
 */
angular.module('rockpaperscissorsgameApp')
  .factory('Game', function () {
    // Service logic


var userInput, CPUInput;

//defines the range for input selection.
var inputList = ['ROCK','PAPER','SCISSORS'];

//the game logic data structure. 'user input' : ['lCPU1','CPU2'].  CPU1 - WIN FOR USER. CPU2 - LOSE FOR USER.
var precedenceMap = {
  'ROCK' : [ 'SCISSORS' , 'PAPER' ],
  'PAPER' : [ 'ROCK' , 'SCISSORS' ],
  'SCISSORS' : [ 'PAPER' , 'ROCK' ]
};

//begin the game.
var newGame = function(){
  generateCPUInput();
  return checkWinner();
};

//register user selection
var acceptInput = function(input){
  userInput = input;
};

// generate random CPU selection
var generateCPUInput = function(){
  CPUInput = inputList[Math.floor(Math.random()*inputList.length)];
};

//returns the CPU selection to show to the user
var getCPUChoice = function(){
  return CPUInput;
};


//wrapper function for checking the winner
var checkWinner = function(){
  var didUserWin;
  didUserWin = callJudge(userInput,CPUInput);
  return declareResult(didUserWin);
};

//actual function to check who won
var callJudge = function(user,CPU){
  var result;
  if( user !== CPU) {
    if(precedenceMap[user].indexOf(CPU) === 0){
      result = true;
    }
    else {
      result = false;
    }
  }
  else {
    result = null;
  }
  return result;
};

//display function to return the result of the game
var declareResult = function(userResult){
  var display = '';
  if(userResult !== null && userResult === true){
    display = 'You win!';
  }
  else if(userResult !== null && userResult === false){
    display = 'You lose!';
  }
  else {
    display = 'It is a tie!';
  }
  return display;
};


    // Public API here
    return {
      play : newGame,
      shuffle : acceptInput,
      getCPUChoice : getCPUChoice
    };
  });
