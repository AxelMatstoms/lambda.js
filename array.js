const Base = require("./base.js");

const Len = (arr) => {
    const iter = (idx) => Base.Isset(arr[idx]) ? iter(idx + 1) : idx;
    return iter(0);
}

const Push = (arr) => (val) => {
    const nArr = arr.slice(0);
    nArr[Len(nArr)] = val;
    return nArr;
}

const Slice = (arr) => (start) => (end) => {
    const l = Len(arr);
    const iter = (tempArr) => (idx) => (idx < end && idx < l) ?
        iter(Push(tempArr)(arr[idx]))(idx + 1) : tempArr;
    return iter([])(start);
}

const Clone = (arr) => Slice(arr)(0)(Len(arr));

const Concat = (arr1) => (arr2) => {
    const l2 = Len(arr2);
    const iter = (tempArr) => (idx) => (idx < l2) ?
        iter(Push(tempArr)(arr2[idx]))(idx + 1) :
        tempArr;
    return iter(arr1)(0);
}

const Pop = (arr) => Slice(arr)(0)(Len(arr) - 1);

const Shift = (arr) => Slice(arr)(1)(Len(arr));

const Reverse = (arr) => {
    const iter = (tempArr) => (idx) => (idx > 0) ?
	iter(Push(tempArr)(arr[idx - 1]))(idx - 1):
	tempArr;
    return iter([])(Len(arr));
}

const _Map = (arr) => (fn) => {
    const l = Len(arr);
    const iter = (tempArr) => (idx) => (idx < l) ?
        iter(Push(tempArr)(fn(arr[idx])))(idx + 1) :
        tempArr;
    return iter([])(0);
}

//Map function gets index too
const AMap = (arr) => (fn) => {
    const l = Len(arr);
    const iter = (tempArr) => (idx) => (idx < l) ?
        iter(Push(tempArr)(fn(arr[idx])(idx)))(idx + 1) :
        tempArr;
    return iter([])(0);
}

const Filter = (arr) => (fn) => {
    const l = Len(arr);
    const iter = (tempArr) => (idx) => (idx < l) ?
        ((fn(arr[idx])) ?
            iter(Push(tempArr)(arr[idx]))(idx + 1) :
            iter(tempArr)(idx + 1)) :
        tempArr;
    return iter([])(0);
}

//Filter function gets index too
const AFilter = (arr) => (fn) => {
    const l = Len(arr);
    const iter = (tempArr) => (idx) => (idx < l) ?
        ((fn(arr[idx])(idx)) ?
            iter(Push(tempArr)(arr[idx]))(idx + 1) :
            iter(tempArr)(idx + 1)) :
        tempArr;
    return iter([])(0);
}

const Reduce = (arr) => (fn) => (first) => {
    const l = Len(arr);
    const iter = (temp) => (idx) => (idx < l) ?
        iter(fn(temp)(arr[idx]))(idx + 1) :
        temp;
    return iter(first)(0);
}

const AReduce = (arr) => (fn) => (first) => {
    const l = Len(arr);
    const iter = (temp) => (idx) => (idx < l) ?
        iter(fn(temp)(arr[idx])(idx))(idx + 1) :
        temp;
    return iter(first)(0);
}

const Join = (arr) => (sep) => {
    const l = Len(arr);
    const iter = (tempStr) => (idx) => (idx < l) ?
        iter(tempStr + ((idx == 0) ? "" : sep) + arr[idx])(idx + 1) :
        tempStr;
    return iter("")(0);
}

const Every = (arr) => (fn) => {
    const l = Len(arr);
    const iter = (ok) => (idx) => (idx < l && ok) ?
        iter(fn(arr[idx]))(idx + 1) :
        ok;
    return iter(true)(0);
}

const AEvery = (arr) => (fn) => {
    const l = Len(arr);
    const iter = (ok) => (idx) => (idx < l && ok) ?
        iter(fn(arr[idx])(idx))(idx + 1) :
        ok;
    return iter(true)(0);
}

const Some = (arr) => (fn) => {
    const l = Len(arr);
    const iter = (ok) => (idx) => (idx < l && !ok) ?
        iter(fn(arr[idx]))(idx + 1) :
        ok;
    return iter(false)(0);
}

const ASome = (arr) => (fn) => {
    const l = Len(arr);
    const iter = (ok) => (idx) => (idx < l && !ok) ?
        iter(fn(arr[idx])(idx))(idx + 1) :
        ok;
    return iter(false)(0);
}

const Includes = (arr) => (item) => Some(arr)((n) => n == item);

//its like python range but pure
const Range = (start) => (end) => (step) => {
    const iter = (tempArr) => (n) => (n < end) ?
        iter(Push(tempArr)(n))(n + step) :
        tempArr;
    return iter([])(start);
}

exports.Len = Len;
exports.Push = Push;
exports.Slice = Slice;
exports.Clone = Clone;
exports.Concat = Concat;
exports.Pop = Pop;
exports.Shift = Shift;
exports.Reverse = Reverse;
exports.Map = _Map;
exports.AMap = AMap;
exports.Filter = Filter;
exports.AFilter = AFilter;
exports.Join = Join;
exports.Reduce = Reduce;
exports.AReduce = AReduce;
exports.Every = Every;
exports.AEvery = AEvery;
exports.Some = Some;
exports.ASome = ASome;
exports.Includes = Includes;
exports.Range = Range;
