const { Circle, Triangle, Rectangle } = require('./shapes');

describe('Circle Class', () => {
    const shape = new Circle();
    test("Can return a string for the SVG file with the given shape color", () => {
        shape.setColor("red");
        expect(shape.render()).toEqual('<circle cx="150" cy="105" r="80" fill="red" />');
    });

    test("Can return a string for the SVG file with the given text and text color", () => {
        shape.setText("SVG");
        shape.setTextColor("white");
        expect(shape.renderText()).toEqual('<text x="150" y="125" font-size="50" text-anchor="middle" fill="white">SVG</text>')
    });

})

describe('Triangle Class', () => {
    const shape = new Triangle();
    test("Can return a string for the SVG file with the given shape color", () => {
        shape.setColor("green");
        expect(shape.render()).toEqual('<polygon points="150,10 262,178 38,178" fill="green" />');
    });

    test("Can return a string for the SVG file with the given text and text color", () => {
        shape.setText("RGB");
        shape.setTextColor("black");
        expect(shape.renderText()).toEqual('<text x="150" y="125" font-size="50" text-anchor="middle" fill="black">RGB</text>')
    });
})

describe('Rectangle Class', () => {
    const shape = new Rectangle();
    test("Can return a string for the SVG file with the given shape color", () => {
        shape.setColor("blue");
        expect(shape.render()).toEqual('<rect width="200" height="100" x="50" y="60" fill="blue" />');
    });

    test("Can return a string for the SVG file with the given text and text color", () => {
        shape.setText("RTX");
        shape.setTextColor("yellow");
        expect(shape.renderText()).toEqual('<text x="150" y="125" font-size="50" text-anchor="middle" fill="yellow">RTX</text>')
    });
})