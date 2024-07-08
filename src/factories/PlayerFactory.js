const Player = require("../models/Player");

/**
 * Factory class for creating instances of the Player class.
 * Provides a method to create new Player objects with specified attributes.
 */
class PlayerFactory {
  /**
   * Creates a new Player object with the specified attributes.
   * @param {string} name - The name of the player.
   * @param {number} health - The initial health points of the player.
   * @param {number} strength - The strength attribute of the player.
   * @param {number} attack - The attack power of the player.
   * @returns {Player} A new Player object initialized with the provided attributes.
   * @example
   * const PlayerFactory = require('./PlayerFactory');
   * const player = PlayerFactory.createPlayer('John', 100, 10, 20);
   */
  static createPlayer(name, health, strength, attack) {
    return new Player(name, health, strength, attack);
  }
}

/**
 * Export the PlayerFactory class to be used throughout the application.
 * @module PlayerFactory
 */
module.exports = PlayerFactory;
