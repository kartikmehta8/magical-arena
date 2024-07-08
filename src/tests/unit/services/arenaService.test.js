const assert = require("assert");
const Player = require("../../../models/Player");
const ArenaService = require("../../../services/ArenaService");
const Logger = require("../../../singletons/Logger");

describe("ArenaService", function () {
  it("should correctly simulate a round of attack and defense", function () {
    const playerA = new Player("Player A", 50, 5, 10);
    const playerB = new Player("Player B", 100, 10, 5);
    Logger.log = function (message) {}; // Suppress logging for test

    ArenaService.playRound(playerA, playerB);

    assert(playerA.isAlive());
    assert(playerB.isAlive());
  });
});
