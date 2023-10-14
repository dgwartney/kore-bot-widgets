const {Buttons} = require('../src/buttons');
describe('Button', () => {

    test('Constructor', () => {
        const button = new Buttons();
        expect(button).toBeTruthy();
    });

    test('Constructor - Set Title', () => {
        const title= "Dude";
        const buttons = new Buttons(title);
        expect(buttons.getTitle()).toBeTruthy();
    });

    test('Add Button', () => {
        const button = new Buttons();
        button.add('template', 'Yo', 'Yo');
    });

    test('Set Title', () => {
        const buttons = new Buttons();
        const title = "Hello";
        buttons.setTitle(title);
        expect(buttons.getTitle()).toEqual(title);
    })

    test('Render', () => {
        const buttons = new Buttons();
        expect(typeof(buttons.render()) == 'string').toBeTruthy();
        console.log(buttons.render());

    });
})