const {Button, Buttons, ButtonType} = require('./dist/index')

const buttons = new Buttons('Hello');
console.log(`title: ${buttons.getTitle()}`);
const url= new URL('https://example.com');
const button1 = new Button(ButtonType.POSTBACK, "Button 1", url, "");
const button2 = new Button(ButtonType.POSTBACK, "Button 2", url, "");
const button3 = new Button(ButtonType.POSTBACK, "Button 3", url, "");
buttons.add(button1)
buttons.add(button2)
buttons.add(button3);
console.log(buttons.render());