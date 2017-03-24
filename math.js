const LArray = require("./array.js");

const E = 2.718281828459045235360287471352662497757247093699959574966967627724076630353;

const PI = 3.141592653589793238462643383279502884197169399375105820974944592307816406286;

const TAU = 2 * PI;

const Abs = (x) => (x >= 0) ? x : -x;

const Sign = (x) => (x >= 0) ? (x == 0) ? 0 : 1 : -1;

const Trunc = (x) => ~~x;

const Floor = (x) => Trunc(x) + ((x < 0 && Trunc(x) != x) ? -1 : 0);

const Round = (x) => Floor(x + 0.5);

const Ceil = (x) => Floor(x + 1);

const Factorial = (x) => (x <= 1) ? 1 : x * Factorial(x - 1);

const Sqrt = (x) => x ** 0.5;

const Cbrt = (x) => x ** (1 / 3);

const Pow = (b) => (e) => b ** e;

const Max = (a) => (b) => (a > b) ? a : b;

const Min = (a) => (b) => (a > b) ? b : a;

const AMax = (arr) => {
    const iter = (max) => (idx) => (idx < LArray.Len(arr)) ? (arr[idx] > max) ? iter(arr[idx])(idx + 1) : iter(max)(idx + 1) : max;
    return iter(-Infinity)(0);
}

const AMin = (arr) => {
    const iter = (min) => (idx) => (idx < LArray.Len(arr)) ? (arr[idx] < min) ? iter(arr[idx])(idx + 1) : iter(min)(idx + 1) : min;
    return iter(Infinity)(0);
}

const ASum = (arr) => LArray.Reduce(arr)((a) => (c) => a + c)(0);

const Sin = (x) => ((y) => ASum(LArray.Map(LArray.Range(0)(10)(1))((n) => (Pow(-1)(n) / Factorial(2 * n + 1)) * Pow(x)(2 * n + 1))))(x % TAU);

const Cos = (x) => ((y) => ASum(LArray.Map(LArray.Range(0)(10)(1))((n) => (Pow(-1)(n) / Factorial(2 * n)) * Pow(y)(2 * n))))(x % TAU);

const Tan = (x) => Sin(x) / Cos(x);

exports.Abs = Abs;
exports.Sign = Sign;
exports.Trunc = Trunc;
exports.Floor = Floor;
exports.Ceil = Ceil;
exports.Round = Round;
exports.Factorial = Factorial;
exports.Sqrt = Sqrt;
exports.Cbrt = Cbrt;
exports.Pow = Pow;
exports.Max = Max;
exports.Min = Min;
exports.AMax = AMax;
exports.AMin = AMin;
exports.Sin = Sin;
exports.Cos = Cos;
exports.Tan = Tan;
exports.E = E;
exports.PI = PI;
exports.TAU = TAU;
