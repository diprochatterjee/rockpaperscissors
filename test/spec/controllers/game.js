'use strict';

describe('Controller: GameCtrl', function () {

  // load the controller's module
  beforeEach(module('rockpaperscissorsgameApp'));

  var game,
    scope,
    GameMock;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _Game_) {
    scope = $rootScope.$new();
    game = $controller('GameCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
    GameMock = _Game_;
  }));

  it('should check if reset method is called when shuffle is invoked.', function () {
    spyOn(game, 'shuffle').and.callThrough();
    spyOn(game, 'reset').and.callThrough();
    game.shuffle('PAPER');
    expect(game.reset).toHaveBeenCalled();
  });

 it('should check if reset method resets the variables.', function () {
    spyOn(game, 'reset').and.callThrough();
    game.reset();
    expect(game.reset).toHaveBeenCalled();
    expect(game.isClicked).toBeFalsy();
    expect(game.choice).toBe('nothing');
    expect(game.result).toBe('');
    expect(game.CPUChoice).toBe('');
  });

 it('should check if shuffle method registers click and the user input', function () {
    spyOn(game, 'shuffle').and.callThrough();
    spyOn(GameMock, 'shuffle').and.callThrough();
    game.shuffle('ROCK');
    expect(game.isClicked).toBeTruthy();
    expect(game.choice).toBe('ROCK');
    expect(GameMock.shuffle).toHaveBeenCalled();
  });

 it('should check if play method invokes the game logic and has defined CPU selection as well as result', function () {
    spyOn(game, 'play').and.callThrough();
    spyOn(GameMock, 'play').and.returnValue('You win!');
    spyOn(GameMock, 'getCPUChoice').and.returnValue('SCISSORS');
    game.play();
    expect(game.play).toHaveBeenCalled();
    expect(GameMock.play).toHaveBeenCalled();
    expect(GameMock.getCPUChoice).toHaveBeenCalled();
    expect(game.result).toBe('You win!');
    expect(game.CPUChoice).toBe('SCISSORS');
  });

});
