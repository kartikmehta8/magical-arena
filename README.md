# Magical Arena

## Problem Statement

Design a Magical Arena. Every Player is defined by a "health" attribute, "strength" attribute, and an "attack" attribute - all positive integers. The player dies if his health attribute touches 0. Any two players can fight a match in the arena. Players attack in turns. Attacking player rolls the attacking dice and the defending player rolls the defending dice. The "attack" value multiplied by the outcome of the attacking dice roll is the damage created by the attacker. The defender "strength" value, multiplied by the outcome of the defending dice is the damage defended by the defender. Whatever damage created by the attacker which is in excess of the damage defended by the defender will reduce the "health" of the defender. The game ends when any player's health reaches 0. The player with lower health attacks first at the start of a match.

## Folder Structure
```
magical-arena/
├── src/
│   ├── models/
│   │   ├── Player.js
│		├── Arena.js
│   ├── services/
│   │   ├── DiceService.js
│   │   ├── ArenaService.js
│   │   ├── InputService.js
│   ├── factories/
│   │   ├── PlayerFactory.js
│   ├── singletons/
│   │   ├── Logger.js
│   ├── facades/
│   │   ├── GameFacade.js
│   ├── interfaces/
│   │   ├── IPlayer.js
│   ├── index.js
│	  ├── tests/
│	  |   ├── integration/
│	  │   │   ├── gameFacade.test.js
│	  │   ├── unit/
│	  │   │   ├── models/
│	  │   │   │   ├── player.test.js
│	  │   │   ├── services/
│	  │   │   │   ├── diceService.test.js
│	  │   │   │   ├── inputService.test.js
│   │   │   │   ├── arenaService.test.js
│	  │   │   ├── factories/
│	  │   │   │   ├── playerFactory.test.js
│  	│   │   ├── singletons/
│	  │   │   │   ├── logger.test.js
│	  │   ├── functional/
│	  │   │   ├── game.test.js
│   ├── index.js
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
```

| File                            | Description                                                                 |
|---------------------------------|-----------------------------------------------------------------------------|
| `src/models/Player.js`          | Defines the Player class with attributes for health, strength, and attack.  |
| `src/models/Arena.js`           | Defines the Arena class which manages the fighting environment.             |
| `src/services/DiceService.js`   | Provides a method to roll a 6-sided dice.                                   |
| `src/services/ArenaService.js`  | Handles the core game logic for attack and defense rounds.                  |
| `src/services/InputService.js`  | Manages and validates user input.                                           |
| `src/factories/PlayerFactory.js`| Factory class for creating Player instances.                                |
| `src/singletons/Logger.js`      | Singleton class for logging functionality.                                  |
| `src/facades/GameFacade.js`     | Facade class that simplifies game initialization and execution.             |
| `src/interfaces/IPlayer.js`     | Interface class for Player.                                                 |
| `src/index.js`                  | Entry point of the application. Handles user input and starts the game.     |

## How to Run the Code

To run the "Magical Arena" project, follow these steps:

1. **Download and extract the repository**:
   - Download the zip file of the repository and extract it.
   - Navigate to the extracted directory. (You already did!)

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the application**:
   ```bash
   npm start
   ```

3. **Run the tests**:
   ```bash
   npm test
   ```

## Tests

### Integration Tests

| File                                    | Description                                                           |
|-----------------------------------------|-----------------------------------------------------------------------|
| `tests/integration/gameFacade.test.js`  | Tests the GameFacade class to ensure it correctly manages the game lifecycle. |

### Unit Tests

| File                                         | Description                                                                            |
|----------------------------------------------|----------------------------------------------------------------------------------------|
| `tests/unit/models/player.test.js`           | Tests the Player class for correct initialization and method functionality.            |
| `tests/unit/services/diceService.test.js`    | Tests the DiceService for correct dice roll outcomes.                                  |
| `tests/unit/services/inputService.test.js`   | Tests the InputService for input validation.                                           |
| `tests/unit/services/arenaService.test.js`   | Tests the ArenaService for correct simulation of attack and defense rounds.            |
| `tests/unit/factories/playerFactory.test.js` | Tests the PlayerFactory for correct player instance creation.                          |
| `tests/unit/singletons/logger.test.js`       | Tests the Logger singleton to ensure it maintains a single instance.                   |

### Functional Tests

| File                               | Description                                                                  |
|------------------------------------|------------------------------------------------------------------------------|
| `tests/functional/game.test.js`    | Simulates the entire game flow with predefined inputs to ensure correctness. |

## Advantages of the Implemented Design

### Modularity

The project is divided into clear modules with single responsibilities, making it easier to understand, maintain, and extend.

### Reusability

Classes and services are designed to be reusable across different parts of the application and for potential future expansions.

### Scalability

The use of design patterns like Factory, Singleton, and Facade ensures that the codebase can be easily scaled and modified without affecting existing functionalities.

### Testability

The code is structured to be easily testable, with clear separations of concerns and well-defined interfaces, making it straightforward to write comprehensive tests.

### Maintainability

The modular design, clear folder structure, and use of design patterns make the codebase highly maintainable, reducing the effort needed for future changes and improvements.

## Conclusion

The "Magical Arena" project showcases a well-structured, modular, and scalable approach to implementing a game simulation. Each component is designed with clear responsibilities and is thoroughly tested to ensure reliability. The use of industry-standard design patterns further enhances the robustness and maintainability of the codebase, making it a solid foundation for future development and extensions.