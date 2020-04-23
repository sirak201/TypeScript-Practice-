interface LabelInterface {
  label: string;
}

interface Point {
  readonly x: number;
  readonly y: number;
}

// Optionals in Type Script
interface SquareConfig {
  color?: string;
  width?: number;
}

//Function interface
interface SearchFunc {
  (source: string, subString: string): boolean;
}

interface StringArray {
  [index: number]: string;
}

function printLablel(labelObj: LabelInterface) {
  console.log(labelObj.label);
}

let myObj = { size: 10, label: "size 10 Objects" };

function createSquare(config: SquareConfig): SquareConfig {
  let newSquare = { color: "white", area: 100 };

  if (config.color) {
    newSquare.color = config.color;
  }

  if (config.width) {
    newSquare.area = config.width * config.width;
  }

  return newSquare;
}

let p1: Point = { x: 10, y: 20 };
let mySquare = createSquare({ color: "red", width: 100 });

let myArr: StringArray;

myArr = ["Bob", "Siral"];

let strFromArr: String = myArr[0];

// Implenting interface

interface ClockInterface {
  currentTime: Date;
  setTime(d: Date): void;
}

class Clock implements ClockInterface {
  currentTime: Date = new Date();
  setTime(d: Date) {
    this.currentTime = d;
  }
  constructor(h: number, m: number) {}
}

let myClock = new Clock(2, 23);
myClock.setTime(new Date(1995));

console.log(myClock.currentTime);

// Extending interfaces

interface Shape {
  color: string;
}

interface Square extends Shape {
  sideLength: number;
}

let square = {} as Square;

square.color = "blue";
square.sideLength = 22;
