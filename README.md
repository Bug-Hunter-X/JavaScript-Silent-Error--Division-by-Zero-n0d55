# JavaScript Silent Error: Division by Zero

This repository demonstrates a common, yet easily missed, error in JavaScript: silent errors during division by zero.

## The Bug
The `foo` function intends to return 0 if either input `a` or `b` is 0; otherwise, it returns the result of `a / b`. However, when `b` is 0, it throws a `ZeroDivisionError` instead of returning 0 as specified.

## The Solution
The solution involves using a more robust check for division by zero before performing the operation.

## How to run the code
1. Clone this repository
2. Open the `bug.js` file to see the buggy code
3. Open the `bugSolution.js` file to see the corrected code
4. Execute the files using Node.js:  `node bug.js` and `node bugSolution.js`