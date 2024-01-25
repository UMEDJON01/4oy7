//  1-chi masala;

//// 1-chi usul
// function kub(num) {
//   let son = Math.pow(num, 3);

//   return son;
// }
// console.log(kub(5));

// //   2-chi usul

// const sum1 = function kub1(num) {
//   let sum1 = Math.pow(num, 3);

//   return sum1;
// };
// console.log(sum1(5));

// //3-chi usul

// const sum2 = (num) => {
//   let sum2 = Math.pow(num, 3);
//   return sum2;
// };
// console.log(sum2(5));

//     2-chi masala

// //1-chi usul
// function kv(a, b) {
//   let c;
//   if (a > b) {
//     c = a;
//   } else {
//     c = b;
//   }
//   return c * c;
// }
// console.log(kv(2, 3));

// //   2-chi usul;

// const kV = function kv1(a, b) {
//   let c;
//   if (a > b) {
//     c = a;
//   } else {
//     c = b;
//   }

//   return c * c;
// };
// console.log(kV(2, 1));

// // 3-chi usul;

// const Kv = (a, b) => {
//   let c;
//   if (a > b) {
//     c = a;
//   } else {
//     c = b;
//   }
//   return c * c;
// };
// console.log(Kv(3, 4));

//  3-chi masala

// // 1-chi usul;

// function sonk1(num) {
//   let birlar = num % 10;

//   let on = num % 100;

//   let yuz = num % 1000;

//   let onlar = (on - birlar) / 10;

//   let yuzlar = (yuz - on) / 100;

//   let result = yuzlar + onlar + birlar;

//   return result;
// }
// console.log(sonk1(333));

// // 2-chi usul;

// const sonk2 = function sonk(num) {
//   let birlar = num % 10;

//   let on = num % 100;

//   let yuz = num % 1000;

//   let onlar = (on - birlar) / 10;

//   let yuzlar = (yuz - on) / 100;

//   let result = yuzlar + onlar + birlar;

//   return result;
// };
// console.log(sonk2(555));

// //    3-chi usul;

// const sonk3 = (num) => {
//   let birlar = num % 10;

//   let on = num % 100;

//   let yuz = num % 1000;

//   let onlar = (on - birlar) / 10;

//   let yuzlar = (yuz - on) / 100;

//   let result = yuzlar + onlar + birlar;

//   return result;
// };
// console.log(sonk3(444));

// 4-chi masala

// // 1-chi usul;

// function bol(atr) {
//   let b = 0;
//   for (let i = 1; i <= atr; i++) {
//     if (atr % i == 0) {
//       b++;
//     }
//   }
//   return b;
// }
// console.log(bol(12) + "-ta bo'luvchisi bor");

// //  2-chi usul

// const bol2 = function snk(atr) {
//   let b = 0;
//   for (let i = 1; i <= atr; i++) {
//     if (atr % i == 0) {
//       b++;
//     }
//   }
//   return b;
// };
// console.log(bol2(56) + "-ta bo'luvchisi bor");

// // 3-chi usul

// const bol3 = (atr) => {
//   let b = 0;
//   for (let i = 1; i <= atr; i++) {
//     if (atr % i == 0) {
//       b++;
//     }
//   }
//   return b;
// };
// console.log(bol(15) + "-ta bo'luvchisi bor");

//  5-chi masala

// // 1chi usul

// function toq(toqson) {
//   let sum = 0;

//   for (let i = 1; i <= toqson; i++) {
//     if (i % 2 != 0) {
//       sum = sum + i;
//     }
//     //console.log(i);
//   }
//   return sum;
// }
// console.log(toq(11));

// // 2-chi usul

// const toq1 = function tq(toqson1) {
//   let sum = 0;

//   for (let i = 1; i <= toqson1; i++) {
//     if (i % 2 != 0) {
//       sum = sum + i;
//     }
//     //console.log(i);
//   }
//   return sum;
// };
// console.log(toq1(7));

// // 3-chi usul

// const toq2 = (toqson2) => {
//   let sum = 0;

//   for (let i = 1; i <= toqson2; i++) {
//     if (i % 2 != 0) {
//       sum = sum + i;
//     }
//     //console.log(i);
//   }
//   return sum;
// };
// console.log(toq2(15));

//  6- chi masala

// // 1chi usul

// function karrali(a, b) {
//   let sum = 1;

//   for (let i = a; i <= b; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//       sum = sum * i;
//       //console.log(i);
//     }
//   }
//   return sum;
// }
// console.log(karrali(1, 30));

// //2-chi usul

// const karrali1 = function karr(a, b) {
//   let sum = 1;

//   for (let i = a; i <= b; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//       sum = sum * i;
//       //console.log(i);
//     }
//   }
//   return sum;
// };
// console.log(karrali1(1, 75));

// //3-chi usul

// const karrali2 = (a, b) => {
//   let sum = 1;

//   for (let i = a; i <= b; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//       sum = sum * i;
//       //console.log(i);
//     }
//   }
//   return sum;
// };
// console.log(karrali2(1, 60));

// 7- chi masala

// //  1chi usul

// function tub(a) {
//   let natija = "";

//   if (a <= 1) {
//     natija = "tub son emas";
//   } else if (a == 2 || a == 3 || a == 5 || a == 7) {
//     natija = "Tub son";
//   } else if (a % 2 == 0 || a % 3 == 0 || a % 5 == 0 || a % 7 == 0) {
//     natija = "tub son emas";
//   } else {
//     natija = "Tub son";
//   }
//   return natija;
// }
// console.log(tub(1));

// //2-chi usul

// const tub1 = function tb(a) {
//   let natija = "";

//   if (a <= 1) {
//     natija = "tub son emas";
//   } else if (a == 2 || a == 3 || a == 5 || a == 7) {
//     natija = "Tub son";
//   } else if (a % 2 == 0 || a % 3 == 0 || a % 5 == 0 || a % 7 == 0) {
//     natija = "tub son emas";
//   } else {
//     natija = "Tub son";
//   }
//   return natija;
// };
// console.log(tub1(11));

// //  3-chi usul

// const tub2 = (a) => {
//   let natija = "";

//   if (a <= 1) {
//     natija = "tub son emas";
//   } else if (a == 2 || a == 3 || a == 5 || a == 7) {
//     natija = "Tub son";
//   } else if (a % 2 == 0 || a % 3 == 0 || a % 5 == 0 || a % 7 == 0) {
//     natija = "tub son emas";
//   } else {
//     natija = "Tub son";
//   }
//   return natija;
// };
// console.log(tub2(21));

//  8-chi masala

// //  1-chi usul

// function pal(num) {
//   let natija;
//   let birlar = num % 10;
//   let on = num % 100;
//   let yuz = num % 1000;
//   let ming = num % 10000;
//   let onlar = (on - birlar) / 10;
//   let yuzlar = (yuz - on) / 100;
//   let minglar = (ming - yuz) / 1000;

//   if (minglar == birlar && yuzlar == onlar) {
//     natija = "UShbu kiritilgan son palindrom";
//   } else if (yuzlar == birlar && num < 1000 && num > 99) {
//     natija = "UShbu kiritilgan son palindrom";
//   } else if (onlar == birlar && num < 100) {
//     natija = "UShbu kiritilgan son palindrom";
//   } else {
//     natija = "UShbu kiritilgan son palindrom emas";
//   }
//   return natija;
// }
// console.log(pal(321));

// //2-chi usul

// const pal1 = function pall(num) {
//   let natija;
//   let birlar = num % 10;
//   let on = num % 100;
//   let yuz = num % 1000;
//   let ming = num % 10000;
//   let onlar = (on - birlar) / 10;
//   let yuzlar = (yuz - on) / 100;
//   let minglar = (ming - yuz) / 1000;

//   if (minglar == birlar && yuzlar == onlar) {
//     natija = "UShbu kiritilgan son palindrom";
//   } else if (yuzlar == birlar && num < 1000 && num > 99) {
//     natija = "UShbu kiritilgan son palindrom";
//   } else if (onlar == birlar && num < 100) {
//     natija = "UShbu kiritilgan son palindrom";
//   } else {
//     natija = "UShbu kiritilgan son palindrom emas";
//   }
//   return natija;
// };
// console.log(pal1(111));

// //  3-chi usul

// const pal3 = (num) => {
//   let natija;
//   let birlar = num % 10;
//   let on = num % 100;
//   let yuz = num % 1000;
//   let ming = num % 10000;
//   let onlar = (on - birlar) / 10;
//   let yuzlar = (yuz - on) / 100;
//   let minglar = (ming - yuz) / 1000;

//   if (minglar == birlar && yuzlar == onlar) {
//     natija = "UShbu kiritilgan son palindrom";
//   } else if (yuzlar == birlar && num < 1000 && num > 99) {
//     natija = "UShbu kiritilgan son palindrom";
//   } else if (onlar == birlar && num < 100) {
//     natija = "UShbu kiritilgan son palindrom";
//   } else {
//     natija = "UShbu kiritilgan son palindrom emas";
//   }
//   return natija;
// };
// console.log(pal3(464));
