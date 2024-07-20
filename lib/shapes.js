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
}

class Circle extends Shape {
    constructor(color, text, textColor) {
        super(color, text, textColor);
        this.svgShapeSyntax = 'circle cx="150" cy="100" r="80"';
    }
}

class Triangle extends Shape {
    constructor(color, text, textColor) {
        super(color, text, textColor);
        this.svgShapeSyntax = 'polygon points="150, 18 244, 182 56, 182"';
    }
}

module.exports = { Circle, Triangle }