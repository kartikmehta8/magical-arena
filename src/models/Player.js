const IPlayer = require("../interfaces/IPlayer");

/**
 * Represents a player in a game with attributes such as name, health, strength, and attack.
 * Provides methods to interact with the player's state.
 */
class Player extends IPlayer {
  /**
   * Creates a new player with the specified attributes.
   * @param {string} name - The name of the player.
   * @param {number} health - The initial health points of the player.
   * @param {number} strength - The strength attribute of the player.
   * @param {number} attack - The attack power of the player.
   * @example
   * const Player = require('./Player');
   * const player = new Player('John', 100, 10, 20);
   */
  constructor(name, health, strength, attack) {
    super(name, health, strength, attack);
  }

  /**
   * Checks if the player is alive based on their current health.
   * @returns {boolean} `true` if the player's health is greater than 0; `false` otherwise.
   * @example
   * const alive = player.isAlive();
   * if (!alive) {
   *   console.log(`${player.name} has been defeated!`);
   * }
   */
  isAlive() {
    return this.health > 0;
  }
}

/**
 * Export the Player class to be used throughout the application.
 * @module Player
 */
module.exports = Player;
