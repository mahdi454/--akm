/*let mark = 190;
let jon = 99;
let janhihgt = 1.55;
let markhight = 1.69;
let jonibm = jon / janhihgt ** 2;
let markibm = mark / markhight ** 2;
let highibm =
  jonibm > markibm
    ? `jan ${jonibm} is strong`
    : `Marks ${markibm}is higher than John`;
console.log(jonibm, markibm, highibm);
console.log(`Mark's BMI (${markibm}) is higher than John's (${jonibm})!"`);
let tip = 233;
let total;
if (tip >= 50 && tip <= 250) {
  total = tip * 0.2;
} else total = tip * 0.15;
console.log(total + tip);
let calctip = function (t) {
  let total;
  if (t >= 50 && t <= 250) {
    total = t * 0.2;
  } else total = t * 0.15;
  return total;
};
console.log(calctip(233));
let bills = [125, 44, 270];
calctip();
let tips = [bills[0], bills[1], bills[2]];
const madi = {
  name: "mahdi hassani",
  age: "22",
  hight: "1.80",
  mass: "55",
  ibm: function () {
    return this.mass / this.hight ** 2;
  },
};
console.log(madi.ibm());*/
/*
let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tip = new Array();
let totals = new Array();
window.onload = function () {
  document.getElementById("h1").innerHTML = bills;
  let calctip = function (bills) {
    for (let i = 0; i < bills.length; i++) {
      if (bills[i] < 250 && bills[i] > 50) {
        tip[i] = bills[i] * 0.2;
      } else {
        tip[i] = bills[i] * 0.15;
      }
    }
  };

  console.log(totals);
  console.log(calctip(bills));
  document.getElementById("h2").innerHTML = calctip(bills);
};
*/
