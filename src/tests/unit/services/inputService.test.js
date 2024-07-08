const assert = require("assert");
const InputService = require("../../../services/InputService");

/**
 * Unit tests for the InputService.
 * @group InputService
 */
describe("InputService", function () {
  /**
   * Test case: should validate positive integers correctly.
   * Verifies the behavior of the isValidPositiveInteger method.
   * @test {InputService#isValidPositiveInteger}
   */
  it("should validate positive integers correctly", function () {
    // Test various inputs and expected outputs
    assert.strictEqual(
      InputService.isValidPositiveInteger(10),
      true,
      "Expected 10 to be a valid positive integer"
    );
    assert.strictEqual(
      InputService.isValidPositiveInteger(0),
      false,
      "Expected 0 to be an invalid positive integer"
    );
    assert.strictEqual(
      InputService.isValidPositiveInteger(-5),
      false,
      "Expected -5 to be an invalid positive integer"
    );
    assert.strictEqual(
      InputService.isValidPositiveInteger("abc"),
      false,
      "Expected 'abc' to be an invalid positive integer"
    );
    assert.strictEqual(
      InputService.isValidPositiveInteger("10"),
      true,
      "Expected '10' (string) to be a valid positive integer"
    );
  });
});
