'use strict';

/**
 * @ngdoc function
 * @name rockpaperscissorsgameApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the rockpaperscissorsgameApp
 */
angular.module('rockpaperscissorsgameApp')
  .controller('GameCtrl', function (Game) {

 
    //contrller method for user to choose among rock,paper and scissors
    this.shuffle = function(userSelection){
    	this.reset();
    	this.isClicked = true;
    	this.choice = userSelection;
    	Game.shuffle(userSelection);
    };

    //resets the game and sets everything to start. hides the play button until the user selects something
    this.reset = function(){
	   	this.isClicked = false;
	    this.choice = 'nothing';
	    this.result = '';
	    this.CPUChoice = '';
    };

    // this method is used to begin and run the game. Displays the CPU choice and the result: if user won, lost or tied!
    this.play = function(){
    	this.result = Game.play();
    	this.CPUChoice = Game.getCPUChoice();
    };

    //this method is called at bootstrap. start state.
    this.reset();

 });
