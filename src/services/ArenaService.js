const DiceService = require("./DiceService");
const Logger = require("../singletons/Logger");

/**
 * Service class for managing rounds of combat between two players in an arena.
 * Provides methods to simulate attacks, calculate damage, and log combat actions.
 */
class ArenaService {
  /**
   * Simulates a round of combat between an attacker and a defender.
   * Rolls dice to determine attack and defense outcomes, calculates damage,
   * and logs the results using a singleton Logger instance.
   * @param {Player} attacker - The player initiating the attack.
   * @param {Player} defender - The player defending against the attack.
   * @example
   * const ArenaService = require('./ArenaService');
   * const attacker = new Player('John', 100, 10, 20);
   * const defender = new Player('Jane', 120, 8, 18);
   * ArenaService.playRound(attacker, defender);
   */
  static playRound(attacker, defender) {
    const attackRoll = DiceService.rollDice();
    const defendRoll = DiceService.rollDice();
    const damageDealt = attacker.attack * attackRoll;
    const damageDefended = defender.strength * defendRoll;

    const damage = damageDealt - damageDefended;

    if (damage > 0) {
      defender.health -= damage;
      Logger.log(
        `${attacker.name} attacks! Rolls ${attackRoll}, dealing ${damageDealt} damage.`
      );
      Logger.log(
        `${defender.name} defends! Rolls ${defendRoll}, defending ${damageDefended} damage.`
      );
      Logger.log(
        `${defender.name} takes ${damage} damage, health now ${defender.health}.`
      );
    } else {
      Logger.log(
        `${attacker.name} attacks! Rolls ${attackRoll}, dealing ${damageDealt} damage.`
      );
      Logger.log(
        `${defender.name} defends! Rolls ${defendRoll}, defending ${damageDefended} damage.`
      );
      Logger.log(`${defender.name} fully defends the attack.`);
    }
  }
}

/**
 * Export the ArenaService class to be used throughout the application.
 * @module ArenaService
 */
module.exports = ArenaService;
