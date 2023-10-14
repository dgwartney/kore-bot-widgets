import {Widget} from './widget';

export enum ButtonType {
    POSTBACK = "postback",
    URL = "web_url"
}

export class Button extends Widget {
    private type: ButtonType;
    private title: string;
    private url: URL;
    private payload: string;

    constructor(type: ButtonType, title: string, url: URL, payload: string) {
        super();
        this.type = type;
        this.title = title;
        this.url = url;
        this.payload = payload;
    }

    render(): String {
        return JSON.stringify({
            type: this.type,
            title: this.title,
            payload: this.payload,
            url: this.url
        });
    }
}

export class Buttons extends Widget {
    private title: string;
    private buttons: Array<Button> = new Array<Button>();

    constructor(title = "") {
        super();
        this.title = title;
    }

    getTitle() {
        return this.title;
    }

    setTitle(title: string) {
        this.title = title;
        return this;
    }

    add(button: Button) {
        this.buttons.push(button);
        return this;
    }

    render() {
        let message = {
            type: "template",
            payload: {
                template_type: "button",
                text: this.title,
                buttons: this.buttons
            }
        }
        return JSON.stringify(message);
    }
}
