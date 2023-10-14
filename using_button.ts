import {Button, Buttons, ButtonType} from './src/app'

const buttons = new Buttons('Hello');
console.log(`title: ${buttons.getTitle()}`);
const button1 = new Button(ButtonType.POSTBACK, "Button 1", new URL('http://example.com'), "");
const button2 = new Button(ButtonType.POSTBACK, "Button 2", new URL('http://example.com'), "");
const button3 = new Button(ButtonType.POSTBACK, "Button 3", new URL('http://example.com'), "");
buttons.add(button1)
buttons.add(button2)
buttons.add(button3)
console.log(buttons.render());