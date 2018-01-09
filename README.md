# walky-talky

<p align="center">
  <img src="https://user-images.githubusercontent.com/11384858/34708235-b9f905d6-f537-11e7-8068-433761706f91.png" />
  <br>
</p>

EventListeners can easily go out of hand if not used with utmost care, walky-talky is a tiny JS library to create a message channel using Publish/Subscribe pattern.

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
