"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("./src/app");
var buttons = new app_1.Buttons('Hello');
console.log("title: ".concat(buttons.getTitle()));
var button = new app_1.Button(app_1.ButtonType.POSTBACK, "Button 1", "Button1", "");
buttons.add(button);
console.log(buttons.render());
