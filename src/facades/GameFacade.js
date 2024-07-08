const Arena = require("../models/Arena");
const ArenaService = require("../services/ArenaService");
const Logger = require("../singletons/Logger");

/**
 * Facade class for managing a game battle between two players.
 * Uses an Arena instance to facilitate the battle and ArenaService for combat mechanics.
 */
class GameFacade {
  /**
   * Creates a new game facade with two players participating in a battle.
   * Initializes an Arena instance with the provided players.
   * @param {Player} player1 - The first player participating in the battle.
   * @param {Player} player2 - The second player participating in the battle.
   * @example
   * const GameFacade = require('./GameFacade');
   * const player1 = new Player('John', 100, 10, 20);
   * const player2 = new Player('Jane', 120, 8, 18);
   * const game = new GameFacade(player1, player2);
   */
  constructor(player1, player2) {
    this.arena = new Arena(player1, player2);
  }

  /**
   * Starts the battle between the two players until one of them is defeated.
   * Uses ArenaService to manage rounds of combat between the players.
   * Logs the winner of the battle using a singleton Logger instance.
   * @example
   * game.startFight();
   */
  startFight() {
    while (!this.arena.isFightOver()) {
      const [attacker, defender] = this.arena.getAttackerAndDefender();
      ArenaService.playRound(attacker, defender);
      if (defender.isAlive()) {
        ArenaService.playRound(defender, attacker);
      }
    }

    const winner = this.arena.player1.isAlive()
      ? this.arena.player1
      : this.arena.player2;
    Logger.log(`${winner.name} wins the battle!`);
  }
}

/**
 * Export the GameFacade class to be used throughout the application.
 * @module GameFacade
 */
module.exports = GameFacade;
