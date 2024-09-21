"use strict";

let result = "";
let actualValue;

for (let i = 10; i >= 1; i--) {
  // i = actualValue;
  result = "";
  for (let m = i; m >= 1; m--) {
    result += "*";
  }
  result += "\n";
  // i = 2; //!
  // for (let a = i; a <= 10; a++) {
  //   result += "*";
  // }
  result += "\n";
  console.log(result);
}
