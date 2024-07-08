const PlayerFactory = require("./factories/PlayerFactory");
const GameFacade = require("./facades/GameFacade");
const InputService = require("./services/InputService");

/**
 * Starts a new game session by retrieving player information using InputService,
 * creating players using PlayerFactory, and initiating the battle using GameFacade.
 * Closes InputService after the game ends.
 * @example
 * startGame();
 */
function startGame() {
  // Get input for Player 1
  InputService.getPlayerInput(1, (name1, health1, strength1, attack1) => {
    // Create Player 1
    const playerA = PlayerFactory.createPlayer(
      name1,
      health1,
      strength1,
      attack1
    );

    // Get input for Player 2
    InputService.getPlayerInput(2, (name2, health2, strength2, attack2) => {
      // Create Player 2
      const playerB = PlayerFactory.createPlayer(
        name2,
        health2,
        strength2,
        attack2
      );

      // Initialize the game with Player 1 and Player 2
      const game = new GameFacade(playerA, playerB);

      // Start the battle
      game.startFight();

      // Close InputService after the game ends
      InputService.close();
    });
  });
}

/**
 * Entry point to start the game.
 */
startGame();

/**
 * Export the startGame function to be used throughout the application.
 * @module startGame
 */
module.exports = startGame;
