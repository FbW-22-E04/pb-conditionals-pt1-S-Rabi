const int1 = 45;
const int2 = 85;

if (int1 >= 50 && int1 <= 99) {
  console.log(true);
} else if (int2 >= 50 && int2 <= 99) {
  console.log(true);
} else {
  console.log(false);
}
// 2:
const int3 = 100;

if (int3 >= 50 && int3 <= 99) {
  console.log(true);
} else {
  console.log(false);
}
// 3:
const a = 4;
const b = 7;
const c = 9;
if (Math.max(a, b, c)) {
  console.log(Math.max(a, b, c));
}

if (Math.max(int1, int2, int3)) {
  console.log(Math.max(int1, int2, int3));
}

// function compare(a, b, c) {
//   if (c > b && a > c) {
//     return a + "  is the biggest";
//   } else if (b > a && b > c) {
//     return b + "is the biggest";
//   } else {
//     return c + " is the biggest";
//   }
// }
// results = compare(a, b, c);
// console.log(results);
//
// results = compare(int1, int2, int3);
// console.log(results);

// 4:
let str = "thon";
if (str == "Py") {
  console.log(str);
} else {
  console.log("Py" + str);
}

// 5:
let intTotal = int1 + int2;
if (intTotal > 50 && intTotal < 80) {
  console.log(65);
} else {
  console.log(80);
}
// 6:
const int4 = 5;
const int5 = 6;
const sixth = int4 + int5;
if (sixth == 8) {
  console.log(true);
} else {
  console.log(false);
}

// 7:
if (int4 == 15 || int5 == 15 || sixth == 15) {
  console.log(true);
} else {
  console.log(false);
}

// 8:
let intTotal2 = int4 + int5;
if (intTotal2 == 7 || 11) {
  console.log(true);
} else {
  console.log(false);
}

// 9:
if (int4 === int5) {
  console.log(int4 * 3 && int5 * 3);
} else {
  console.log(int4, int5);
}

// 10:
let intTotal3 = int5 - 19;
if (intTotal3 > 19) {
  console.log(intTotal3 * 2);
} else {
  console.log(intTotal3);
}
// 11:
let firstName = "Behnam";
let age = 30;
if (age < 13) {
  console.log("firstName is a child");
} else if (age >= 13 && age < 20) {
  console.log("firstName is a teenager");
} else if (age >= 20 && age < 30) {
  console.log("firstName is a young adult");
} else {
  console.log("firstName is a adult");
}
