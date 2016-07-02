'use strict';

describe('Service: game', function () {

  // load the service's module
  beforeEach(module('rockpaperscissorsgameApp'));

  // instantiate service
  var game;
  beforeEach(inject(function (_Game_) {
    game = _Game_;
  }));

  it('should do something', function () {
    expect(!!game).toBe(true);
  });

  it('should invoke play method of game', function () {
    spyOn(game,'play').and.callThrough();
    game.shuffle('ROCK');
    game.play();
  });

  it('should invoke getCPUChoice method of game', function () {
    spyOn(game,'getCPUChoice').and.callThrough();
    game.getCPUChoice();
  });

  it('should check the game logic for paper', function () {
    spyOn(game,'play').and.callThrough();
    game.shuffle('PAPER');
    game.play();
  });

  it('should check the game logic for scissors', function () {
    spyOn(game,'play').and.callThrough();
    game.shuffle('SCISSORS');
    game.play();
  });
});
