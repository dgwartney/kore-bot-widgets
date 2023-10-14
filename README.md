# Kore Widget Library

Javascript Class library for creating templates programmatically


## Examples

### Button

```javascript
const {print} = require('./widget.ts');
const {Buttons} = require('./buttons.ts');

const button = new Buttons("I am a button, button");
button.add('template', 'Yo', 'Yo');
button.add('template', 'Dude', 'Dude');


// Use print() wrapper function that is the same used in Kore XO Bot
print(button.render());

```

## Using

To be Implemented

## TO DO

1. Build out more widgets
2. Use web pack or other tool to minimize and put in one file
3. Provide instructions on to deploy in a bot using the bot functions capabilities.