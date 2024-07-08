const assert = require("assert");
const PlayerFactory = require("../../../factories/PlayerFactory");
const Player = require("../../../models/Player");

/**
 * Unit tests for the PlayerFactory class.
 * @group PlayerFactory
 */
describe("PlayerFactory", function () {
  /**
   * Test case: should create a player with the given attributes.
   * Verifies that PlayerFactory creates a Player object with the specified attributes.
   * @test {PlayerFactory#createPlayer}
   */
  it("should create a player with the given attributes", function () {
    // Create a player using PlayerFactory with specified attributes
    const player = PlayerFactory.createPlayer("Player A", 50, 5, 10);

    // Assert that the created object is an instance of Player
    assert(player instanceof Player);

    // Assert that the player attributes match the expected values
    assert.strictEqual(player.name, "Player A");
    assert.strictEqual(player.health, 50);
    assert.strictEqual(player.strength, 5);
    assert.strictEqual(player.attack, 10);
  });
});
