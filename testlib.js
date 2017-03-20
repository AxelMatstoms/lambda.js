const color = require("colors");
require("./arrayequals.js");

exports.assertEqual = (expected, actual, description) => {
    let passed;
    if (expected instanceof Array) {
      passed = expected.equals(actual);
    } else {
      passed = expected == actual;
    }
    console.log(`[${(passed ? "OK".bold.green : "FAILED".bold.red)}] ${description} ${passed ? "": `expected: ${expected}, actual: ${actual}`}`);
}
