/**
 * A tiny JS library to create a message channel using Publish/Subscribe pattern
 * The events are stored as an object where keys will be the type of actions and values will be array of listeners
 * There can be multiple listeners for a single action type
 */
class WalkyTalky {
  constructor() {
    this.events = {};
  }

  /**
   * Function to subscribe to an event/action
   * It checks for the actionType if it already exists, then adds the listener to the list of that particular actionType
   * If the actionType doesn't already exists then it creates the same and assigns the listeners to it's list.
   * @param {string} actionType
   * @param {object} listener
   * @memberof WalkyTalky
   */
  subscribe(actionType, listener) {
    // create the actionType if not yet created
    if (!this.events[actionType]) this.events[actionType] = [];
    // add the listener
    this.events[actionType].push(listener);
  }

  /**
   * Function to publish events/action
   * The subscribed event/action will get this message
   * This function iterates over the list of listeners and calls each of them with params for a particular actionType
   * @param {string} actionType
   * @param {object} data
   * @memberof WalkyTalky
   */
  publish(actionType, data) {
    // return if the actionType doesn't exist, or there are no listeners
    if (!this.events[actionType] || this.events[actionType].length < 1) return;

    // send the event to all listeners
    this.events[actionType].forEach((listener) => {
      listener(data || {});
    });
  }
}

export default new WalkyTalky();
