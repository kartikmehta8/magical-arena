const assert = require("assert");
const DiceService = require("../../../services/DiceService");

/**
 * Unit tests for the DiceService.
 * @group DiceService
 */
describe("DiceService", function () {
  /**
   * Test case: should roll a dice and return a number between 1 and 6.
   * Verifies that the rollDice method returns values within the expected range.
   * @test {DiceService#rollDice}
   */
  it("should roll a dice and return a number between 1 and 6", function () {
    // Perform the dice roll test 100 times
    for (let i = 0; i < 100; i++) {
      const roll = DiceService.rollDice();
      assert(
        roll >= 1 && roll <= 6,
        `Expected roll to be between 1 and 6, got ${roll}`
      );
    }
  });
});
