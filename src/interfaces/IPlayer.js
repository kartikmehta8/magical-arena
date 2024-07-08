/**
 * Interface class representing a player in a game.
 * Provides structure for properties and requires implementation of isAlive method.
 * @class
 * @abstract
 * @throws {TypeError} Throws an error if an attempt is made to instantiate IPlayer directly.
 * @throws {TypeError} Throws an error if isAlive method is not overridden by subclasses.
 * @param {string} name - The name of the player.
 * @param {number} health - The health points of the player.
 * @param {number} strength - The strength of the player.
 * @param {number} attack - The attack power of the player.
 * @example
 * class ConcretePlayer extends IPlayer {
 *   constructor(name, health, strength, attack) {
 *     super(name, health, strength, attack);
 *   }
 *   isAlive() {
 *     return this.health > 0;
 *   }
 * }
 */
class IPlayer {
  /**
   * Creates an instance of IPlayer.
   * Throws errors if attempted to be instantiated directly or if isAlive method is not overridden.
   * @param {string} name - The name of the player.
   * @param {number} health - The health points of the player.
   * @param {number} strength - The strength of the player.
   * @param {number} attack - The attack power of the player.
   */
  constructor(name, health, strength, attack) {
    if (new.target === IPlayer) {
      throw new TypeError("Cannot construct IPlayer instances directly");
    }
    if (typeof this.isAlive !== "function") {
      throw new TypeError("Must override method isAlive");
    }
    this.name = name;
    this.health = health;
    this.strength = strength;
    this.attack = attack;
  }
}

/**
 * Export the IPlayer interface class to be used for defining player implementations.
 * @module IPlayer
 */
module.exports = IPlayer;
