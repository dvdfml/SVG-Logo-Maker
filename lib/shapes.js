class Shape {
    constructor(color = "", text = "", textColor = "") {
        this.color = color;
        this.text = text;
        this.textColor = textColor;
    }
    setColor(color) {
        this.color = color;
    }

    setText(text) {
        this.text = text;
    }

    setTextColor(color) {
        this.textColor = color;
    }

    render() {
        return `<${this.svgShapeSyntax} fill="${this.color}" />`
    }

    renderText() {
        return `<text x="150" y="125" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
    }
}

class Circle extends Shape {
    constructor(color, text, textColor) {
        super(color, text, textColor);
        this.svgShapeSyntax = 'circle cx="150" cy="105" r="80"';
    }
}

class Triangle extends Shape {
    constructor(color, text, textColor) {
        super(color, text, textColor);
        this.svgShapeSyntax = 'polygon points="150,10 262,178 38,178"';
    }
}

class Rectangle extends Shape {
    constructor(color, text, textColor) {
        super(color, text, textColor);
        this.svgShapeSyntax = 'rect width="200" height="100" x="50" y="60"'
    }
}

module.exports = { Circle, Triangle, Rectangle }