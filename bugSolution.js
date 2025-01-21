function foo(a, b) {
  if (a === 0 || b === 0) {
    return 0; 
  } else {
    return a / b; 
  }
}

console.log(foo(10, 0)); // Returns 0

function fooCorrected(a, b) {
  if (b === 0) {
    return 0;
  } else {
    return a / b;
  }
}
console.log(fooCorrected(10,0)); // Returns 0