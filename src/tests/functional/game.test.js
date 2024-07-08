const assert = require("assert");
const PlayerFactory = require("../../factories/PlayerFactory");
const GameFacade = require("../../facades/GameFacade");
const InputService = require("../../services/InputService");
const Logger = require("../../singletons/Logger");

/**
 * Functional test for the GameFacade using InputService to simulate user inputs.
 * Verifies that the game runs with user inputs and determines a winner.
 * @group Game
 */
describe("Game Functional Test", function () {
  /**
   * Test case: should run the game with user inputs and determine a winner.
   * Uses mocked InputService to simulate user inputs for Player A and Player B.
   * Verifies that at least one player is alive after the fight ends.
   * @test {GameFacade#startFight}
   */
  it("should run the game with user inputs and determine a winner", function (done) {
    // Mock InputService to provide predefined inputs
    InputService.rl.question = (query, callback) => {
      if (query.includes("Player 1")) {
        callback("Player A");
      } else if (query.includes("health for Player A")) {
        callback("50");
      } else if (query.includes("strength for Player A")) {
        callback("5");
      } else if (query.includes("attack for Player A")) {
        callback("10");
      } else if (query.includes("Player 2")) {
        callback("Player B");
      } else if (query.includes("health for Player B")) {
        callback("100");
      } else if (query.includes("strength for Player B")) {
        callback("10");
      } else if (query.includes("attack for Player B")) {
        callback("5");
      }
    };

    Logger.log = function (message) {}; // Suppress logging for test

    /**
     * Helper function to start the game with mocked user inputs.
     * Retrieves inputs for Player 1 and Player 2, creates players, starts the game, and asserts the outcome.
     */
    function startGame() {
      InputService.getPlayerInput(1, (name1, health1, strength1, attack1) => {
        const playerA = PlayerFactory.createPlayer(
          name1,
          health1,
          strength1,
          attack1
        );

        InputService.getPlayerInput(2, (name2, health2, strength2, attack2) => {
          const playerB = PlayerFactory.createPlayer(
            name2,
            health2,
            strength2,
            attack2
          );

          // Initialize GameFacade with players and start the fight
          const game = new GameFacade(playerA, playerB);
          game.startFight();

          // Assert that at least one player is alive after the fight ends
          assert(playerA.isAlive() || playerB.isAlive());

          // Close InputService after test completes
          InputService.close();

          // Signal test completion
          done();
        });
      });
    }

    // Start the game with mocked user inputs
    startGame();
  });
});
