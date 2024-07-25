# SVG-Logo-Maker

## Description
Svg Logo Maker is a command-line application that takes in user input to generate a logo and save it as an [SVG file](https://en.wikipedia.org/wiki/Scalable_Vector_Graphics). The application prompts the user to select a color and shape, provide text for the logo, and save the generated SVG to a `.svg` file.

## Installation

This application requires [Node.js](https://nodejs.org/) and the package manager [npm](https://www.npmjs.com/).  
Open the terminal in the root directory of the application and run the following command:

```bash
npm i
```
This will install the [Inquirer](https://www.npmjs.com/package/inquirer/v/8.2.4) package needed to run the application.

## Usage
To run the application, open the terminal in the root directory of the application and run the following command:
```bash
node index.js
```
If the application was initiated succesfully, you will be prompted to choose a shape.
```bash
$ node index.js
? Choose a shape: (Use arrow keys)
> circle
  triangle
  rectangle
```
Choose a shape and continue answering the prompts. 
When done, the SVG file will be generated and stored in the examples folder of the root directory as logo.svg.

> [!CAUTION]
> Running the application again will overwrite the SVG file.

## Demo
[Video]()