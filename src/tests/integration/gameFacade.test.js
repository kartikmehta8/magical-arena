const assert = require("assert");
const PlayerFactory = require("../../factories/PlayerFactory");
const GameFacade = require("../../facades/GameFacade");
const Logger = require("../../singletons/Logger");

/**
 * Tests the behavior of GameFacade by simulating a fight between two players and verifying the outcome.
 * @group GameFacade
 */
describe("GameFacade", function () {
  /**
   * Test case: should run a complete fight simulation and determine a winner.
   * Verifies that at least one player is alive after the fight ends.
   * @test {GameFacade#startFight}
   */
  it("should run a complete fight simulation and determine a winner", function () {
    // Create players with specified attributes
    const playerA = PlayerFactory.createPlayer("Player A", 50, 5, 10);
    const playerB = PlayerFactory.createPlayer("Player B", 100, 10, 5);

    // Suppress logging for cleaner test output
    Logger.log = function (message) {};

    // Initialize GameFacade with players and start the fight
    const game = new GameFacade(playerA, playerB);
    game.startFight();

    // Assert that at least one player is alive after the fight ends
    assert(
      playerA.isAlive() || playerB.isAlive(),
      "Expected at least one player to be alive"
    );
  });
});
