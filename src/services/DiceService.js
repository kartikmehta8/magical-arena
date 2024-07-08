/**
 * Service class for simulating dice rolls.
 * This class provides a method to generate a random number representing a dice roll.
 */
class DiceService {
  /**
   * Generates a random number between 1 and 6, simulating a dice roll.
   * @returns {number} A random integer between 1 and 6.
   * @example
   * const DiceService = require('./DiceService');
   * const result = DiceService.rollDice();
   * console.log(`You rolled a ${result}`);
   */
  static rollDice() {
    return Math.floor(Math.random() * 6) + 1;
  }
}

/**
 * Export the DiceService class to be used throughout the application.
 * @module DiceService
 */
module.exports = DiceService;
