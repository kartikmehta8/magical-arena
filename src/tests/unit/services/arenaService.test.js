const assert = require("assert");
const Player = require("../../../models/Player");
const ArenaService = require("../../../services/ArenaService");
const Logger = require("../../../singletons/Logger");

/**
 * Unit tests for ArenaService to simulate rounds of attack and defense.
 * @group ArenaService
 */
describe("ArenaService", function () {
  /**
   * Test case: should correctly simulate a round of attack and defense.
   * Verifies that both players remain alive after a round of combat.
   * @test {ArenaService#playRound}
   */
  it("should correctly simulate a round of attack and defense", function () {
    // Create players with specified attributes
    const playerA = new Player("Player A", 50, 5, 10);
    const playerB = new Player("Player B", 100, 10, 5);

    // Suppress logging for cleaner test output
    Logger.log = function (message) {};

    // Simulate a round of combat between playerA and playerB
    ArenaService.playRound(playerA, playerB);

    // Assert that both players are alive after the round
    assert(playerA.isAlive(), "Expected Player A to be alive");
    assert(playerB.isAlive(), "Expected Player B to be alive");
  });
});
