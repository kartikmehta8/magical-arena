/**
 * Represents an arena where two players engage in a fight.
 * Provides methods to manage and check the status of the fight.
 */
class Arena {
  /**
   * Creates a new arena with two players.
   * @param {Player} player1 - The first player participating in the arena.
   * @param {Player} player2 - The second player participating in the arena.
   * @example
   * const Arena = require('./Arena');
   * const player1 = new Player('John', 100, 10, 20);
   * const player2 = new Player('Jane', 120, 8, 18);
   * const arena = new Arena(player1, player2);
   */
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
  }

  /**
   * Determines the attacker and defender based on their current health.
   * The player with lower health becomes the attacker.
   * @returns {Player[]} An array where the first element is the attacker and the second element is the defender.
   * @example
   * const [attacker, defender] = arena.getAttackerAndDefender();
   * attacker.attack(defender);
   */
  getAttackerAndDefender() {
    if (this.player1.health <= this.player2.health) {
      return [this.player1, this.player2];
    }
    return [this.player2, this.player1];
  }

  /**
   * Checks if the fight in the arena is over.
   * @returns {boolean} `true` if either player is no longer alive; `false` otherwise.
   * @example
   * if (arena.isFightOver()) {
   *   console.log('The fight in the arena is over.');
   * }
   */
  isFightOver() {
    return !this.player1.isAlive() || !this.player2.isAlive();
  }
}

/**
 * Export the Arena class to be used throughout the application.
 * @module Arena
 */
module.exports = Arena;
