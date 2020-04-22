function f() {
  var a = 10;
  return function g() {
    var b = a + 1;
    return b;
  };
}

var g = f();

for (let i = 0; i < 10; i++) {
  setTimeout(() => console.log(i), 100 * i);
}
