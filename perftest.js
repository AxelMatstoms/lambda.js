const LArray = require("./array.js");
const TDD = require("./testlib.js");

console.log("Testing Len");
const arr = [...Array(1000).keys()];
TDD.testSpeedComp(100000, () => arr.length, () => LArray.Len(arr), "Array.prototype.length", "Array.Len");
