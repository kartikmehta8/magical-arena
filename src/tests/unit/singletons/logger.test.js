const assert = require("assert");
const Logger = require("../../singletons/Logger");

/**
 * Unit tests for the Logger singleton.
 * @group Logger
 */
describe("Logger", function () {
  /**
   * Test case: should create a single instance of Logger.
   * Verifies that multiple instances of Logger refer to the same singleton instance.
   * @test {Logger}
   */
  it("should create a single instance of Logger", function () {
    // Require Logger instance twice
    const logger1 = require("../../../src/singletons/Logger");
    const logger2 = require("../../../src/singletons/Logger");

    // Assert that both instances are strictly equal, confirming singleton behavior
    assert.strictEqual(logger1, logger2);
  });
});
