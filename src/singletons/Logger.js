/**
 * Logger class for logging messages to the console.
 * This class implements the Singleton pattern, ensuring that only one instance
 * of the Logger exists throughout the application.
 */
class Logger {
  /**
   * @property {Logger} instance - The single instance of the Logger class.
   * @static
   */
  static instance;

  /**
   * Creates an instance of the Logger class.
   * If an instance already exists, the existing instance is returned.
   * This ensures that only one instance of the Logger is created.
   */
  constructor() {
    if (Logger.instance) {
      return Logger.instance;
    }
    Logger.instance = this;
  }

  /**
   * Logs a message to the console.
   * @param {string} message - The message to log.
   * @example
   * const logger = require('./Logger');
   * logger.log('This is a log message.');
   */
  log(message) {
    console.log(message);
  }
}

/**
 * Export the single instance of the Logger class.
 * This ensures that the same instance is used throughout the application.
 * @module Logger
 */
module.exports = new Logger();
