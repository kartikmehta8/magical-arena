const assert = require("assert");
const Player = require("../../../models/Player");

/**
 * Unit tests for the Player class.
 * @group Player
 */
describe("Player", function () {
  /**
   * Test case: should initialize with given attributes.
   * Verifies that a Player object initializes correctly with provided attributes.
   * @test {Player#constructor}
   */
  it("should initialize with given attributes", function () {
    // Create a player with specified attributes
    const player = new Player("Player A", 50, 5, 10);

    // Assert that the player attributes match the expected values
    assert.strictEqual(player.name, "Player A");
    assert.strictEqual(player.health, 50);
    assert.strictEqual(player.strength, 5);
    assert.strictEqual(player.attack, 10);
  });

  /**
   * Test case: should check if the player is alive.
   * Verifies that the isAlive() method correctly determines if a player is alive based on health.
   * @test {Player#isAlive}
   */
  it("should check if the player is alive", function () {
    // Create a player with health 0 (not alive)
    const player = new Player("Player A", 0, 5, 10);
    assert.strictEqual(player.isAlive(), false);

    // Create a player with health greater than 0 (alive)
    const player2 = new Player("Player B", 10, 5, 10);
    assert.strictEqual(player2.isAlive(), true);
  });
});
