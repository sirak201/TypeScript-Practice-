// Generics
function identity<T>(arg: T): T {
  return arg;
}

let outlet = identity<string>("mystring");
console.log(outlet);

interface GeneicIdentityFn {
  <T>(arg: T): T;
}

let myIdentity: GeneicIdentityFn = identity;

class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.add = (x: number, y: number) => {
  return x + y;
};

let myGenericWord = new GenericNumber<string>();
myGenericWord.add = (s: string, y: string) => {
  return s + y;
};

console.log(myGenericNumber.add(20, 20));

console.log(myGenericWord.add("zeo", "1"));

//Interface with Genric

interface Lengthwise {
  length: number;
}

function myLength<T extends Lengthwise>(arg: T) {
  console.log(arg.length);
}

myLength([1, 2, 3, 4]);

function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}
