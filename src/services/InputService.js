const readline = require("readline");

/**
 * Service class for handling user input via readline interface for console applications.
 * Provides methods to validate and retrieve player information interactively.
 */
class InputService {
  /**
   * Initializes a new InputService instance with a readline interface.
   * Uses process.stdin for input and process.stdout for output.
   * @example
   * const InputService = require('./InputService');
   * const inputService = InputService;
   */
  constructor() {
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }

  /**
   * Checks if a given value is a valid positive integer.
   * @param {any} value - The value to be validated.
   * @returns {boolean} Returns true if the value is a valid positive integer, otherwise false.
   * @example
   * const isValid = inputService.isValidPositiveInteger(10);
   */
  isValidPositiveInteger(value) {
    const number = Number(value);
    return Number.isInteger(number) && number > 0;
  }

  /**
   * Prompts the user to enter information for a player (name, health, strength, attack).
   * Validates each input and retries if the input is invalid.
   * Calls the callback function with the validated player information.
   * @param {number} playerNumber - The player number (1 or 2).
   * @param {function} callback - The callback function to handle the validated player information.
   * @example
   * inputService.getPlayerInput(1, (name, health, strength, attack) => {
   *   console.log(`Player 1: Name - ${name}, Health - ${health}, Strength - ${strength}, Attack - ${attack}`);
   * });
   */
  getPlayerInput(playerNumber, callback) {
    this.rl.question(`Enter name for Player ${playerNumber}: `, (name) => {
      this.rl.question(`Enter health for ${name}: `, (health) => {
        if (!this.isValidPositiveInteger(health)) {
          console.log("Invalid input. Health must be a positive integer.");
          return this.getPlayerInput(playerNumber, callback);
        }

        this.rl.question(`Enter strength for ${name}: `, (strength) => {
          if (!this.isValidPositiveInteger(strength)) {
            console.log("Invalid input. Strength must be a positive integer.");
            return this.getPlayerInput(playerNumber, callback);
          }

          this.rl.question(`Enter attack for ${name}: `, (attack) => {
            if (!this.isValidPositiveInteger(attack)) {
              console.log("Invalid input. Attack must be a positive integer.");
              return this.getPlayerInput(playerNumber, callback);
            }

            callback(name, Number(health), Number(strength), Number(attack));
          });
        });
      });
    });
  }

  /**
   * Closes the readline interface, releasing the associated resources.
   * @example
   * inputService.close();
   */
  close() {
    this.rl.close();
  }
}

/**
 * Export the InputService instance to be used throughout the application.
 * @module InputService
 */
module.exports = new InputService();
