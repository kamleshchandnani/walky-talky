# walky-talky

<p align="center">
  <img src="https://user-images.githubusercontent.com/11384858/34708235-b9f905d6-f537-11e7-8068-433761706f91.png" />
  <br>
</p>

EventListeners can easily go out of hand if not used with utmost care, walky-talky is a tiny JS library to create a message channel using Publish/Subscribe pattern.

## Purpose
If you ever want to create a channel where anyone can subscribe to the custom action types and associate a custom handler with it, Then based on some event it is published with the action type. The subscriber who had subscribed to this event will get notified and the handler which was associated with it while subscribing will be called with params.

This can also act as a communication bridge between two applications.


## Installation

```
yarn add walky-talky
```

or

```
npm install walky-talky --save
```

## Usage
```js
// module.js
import WalkyTalky from "walky-talky";
actionHandler = dataObject => {
  // some logic
};
// subscribe to a custom action type
WalkyTalky.subscribe("ACTION_TYPE", actionHandler);

// app.js
import WalkyTalky from "walky-talky";
// publish the action type with the data object
WalkyTalky.publish("ACTION_TYPE", dataObject);
```

## Like it?

:star: this repo

## License

MIT © [Kamlesh Chandnani](https://github.com/kamleshchandnani)
