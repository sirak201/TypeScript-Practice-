class Animal {
  private name: string;
  public constructor(theName: string) {
    this.name = theName;
  }

  public move(distanceInMeters: number = 0) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}

class Snake extends Animal {
  public constructor(name: string) {
    super(name);
  }

  public move(distanceInMeters = 5) {
    console.log("Slitheriinggg");
    super.move(distanceInMeters);
  }
}

let sam = new Snake("Sam");
sam.move(45);

// Understanding Privates

class Rhino extends Animal {
  constructor() {
    super("Rihino");
  }
}

class Empolyee {
  private name: string;
  constructor(theName: string) {
    this.name = theName;
  }
  move(distanceInMeters: number = 0) {
    console.log(distanceInMeters);
  }
}

let animal = new Animal("Goat");
let rhino = new Rhino();
let employee = new Empolyee("Sirak");

animal = rhino;
// animal = employee does not work because of the private field

// Read Only

class Octopus {
  readonly name: string;
  readonly numberOfLegs: number = 8;
  constructor(readonly newName: string) {
    this.name = newName;
  }
}

let myOct = new Octopus("James");
console.log(myOct.name);

class Grid {
  static orgin = { x: 0, y: 0 }; // Staic values
}
