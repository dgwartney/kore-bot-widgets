const {Widget} = require('./widget');
class Buttons extends Widget {
    constructor(title="") {
        super();
        this._buttons = [];
        this._title = title;
    }

    getTitle() {
        return this._title;
    }

    setTitle(title) {
        this._title = title;
        return this;
    }

    add(type, title, payload) {
        const button = {
            "type": type,
            "title": title,
            "payload": payload
        }
        this._buttons.push(button);
        return this;
    }

    render() {
        let message = {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": this._title,
                "buttons": this._buttons
            }
        }
        return JSON.stringify(message);
    }
}

module.exports = {
    Buttons
}