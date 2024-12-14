function foo(a, b) {
  if (isNaN(a) || isNaN(b)) {
    return 0; // or handle NaN in a more appropriate way
  }
  return a + b;
}

function bar(a, b) {
  if (isNaN(a) || isNaN(b)) {
    return 0; // or handle NaN in a more appropriate way
  }
  return foo(a, b) * 2;
}

console.log(bar(2, 3)); // Output: 10
console.log(bar(NaN, 3)); // Output: 0