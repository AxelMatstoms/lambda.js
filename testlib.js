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

exports.testSpeedComp = (n, fn1, fn2, fn1name, fn2name) => {
    let fn1n = fn1name ? fn1name : "fn1";
    let fn2n = fn2name ? fn2name : "fn2";
    console.log(`Testing ${fn1n}...`);
    let tick1 = Date.now();
    for(let i = 0; i < n; i++) {
        fn1();
    }
    let tock1 = Date.now();
    let res1 = tock1 - tick1;
    console.log(`Testing ${fn2n}...`);
    let tick2 = Date.now();
    for(let i = 0; i < n; i++) {
        fn2();
    }
    let tock2 = Date.now();
    let res2 = tock2- tick2;
    console.log(`${fn1n}: ${res1}ms`)
    console.log(`${fn2n}: ${res2}ms`)
}

exports.testSpeedCurve = (times, minN, maxN, stepN, setupFn, fn) => {
    let res = [];
    for(let i = minN; i < maxN; i += stepN) {
        let val = setupFn(i);
        let tick = Date.now();
        for (let k = 0; k < times; k++) {
            fn(val);
        }
        let tock = Date.now();
        res.push({"n": i, "t": tock - tick})
    }
    res.forEach(d => console.log(d.n + " " + d.t));
}
