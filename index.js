import { HashMap } from "./hashMap.js";

const test = new HashMap();

test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");

// test overwriting a value

test.set("apple", "green");

console.log(test.get("apple")); // green

console.log(test.get("banana")); // yellow
console.log(test.get("carrot")); // orange
console.log(test.get("dog")); // brown
console.log(test.get("elephant")); // gray
console.log(test.get("frog")); // green
console.log(test.get("grape")); // purple
console.log(test.get("hat")); // black
console.log(test.get("ice cream")); // white
console.log(test.get("jacket")); // blue
console.log(test.get("kite")); // pink
console.log(test.get("lion")); // golden

// test resizing

test.set("mango", "orange");

console.log(test.get("apple")); // green
console.log(test.get("banana")); // yellow
console.log(test.get("carrot")); // orange
console.log(test.get("dog")); // brown
console.log(test.get("elephant")); // gray
console.log(test.get("frog")); // green
console.log(test.get("grape")); // purple
console.log(test.get("hat")); // black
console.log(test.get("ice cream")); // white
console.log(test.get("jacket")); // blue
console.log(test.get("kite")); // pink
console.log(test.get("lion")); // golden
console.log(test.get("mango")); // orange

console.log(test.length()); // 13

// test removing a value

test.remove("banana");
test.remove("carrot");

console.log(test.get("apple")); // green
console.log(test.get("banana")); // undefined
console.log(test.get("carrot")); // undefined
console.log(test.get("dog")); // brown
console.log(test.get("elephant")); // gray

console.log(test.length()); // 11

// test clearing the hashmap

test.clear();

console.log(test.get("apple")); // undefined
console.log(test.get("banana")); // undefined
console.log(test.get("carrot")); // undefined

console.log(test.length()); // 0

// test entries

test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");

console.log(test.entries()); // [ [ 'apple', 'red' ], [ 'banana', 'yellow' ], [ 'carrot', 'orange' ], [ 'dog', 'brown' ] ]
