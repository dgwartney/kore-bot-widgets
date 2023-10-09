const {print} = require('./widget.js');
const {Buttons} = require('./button.js');

const button = new Buttons("I am a button, button");
button.add('template', 'Yo', 'Yo');
button.add('template', 'Dude', 'Dude');


// Use print() wrapper function that is the same used in Kore XO Bot
print(button.render());