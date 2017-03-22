const TDD = require("./testlib.js");
const LArray = require("./array.js");

TDD.testSpeedCurve(10000, 0, 1000, 10, (i) => [...Array(i).keys()], (arr) => LArray.Len(arr));
