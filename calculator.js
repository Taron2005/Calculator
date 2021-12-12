let num0 = document.querySelector("#num0");
let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let num3 = document.querySelector("#num3");
let num4 = document.querySelector("#num4");
let num5 = document.querySelector("#num5");
let num6 = document.querySelector("#num6");
let num7 = document.querySelector("#num7");
let num8 = document.querySelector("#num8");
let num9 = document.querySelector("#num9");
let bazmapatkac = document.querySelector("#bazmapatkac");
let bajanac = document.querySelector("#bajanac");
let minus = document.querySelector("#minus");
let plus = document.querySelector("#plus");
let jnjel = document.querySelector("#delete");
let ket = document.querySelector("#ket");
let havasar = document.querySelector("#havasar");
let tokos = document.querySelector("#tokos");
let ekran = document.querySelector("#ecran");
let jnjel1 = document.querySelector("#jnjel1");
let qarakusi = document.querySelector("#qarakusi");
let astichan = document.querySelector("#astichan");
let armat = document.querySelector("#armat");
let minusnshan = document.querySelector("#minusnshan");

num0.addEventListener("click", function () {
  if (ekran.innerHTML.length < 12) ekran.innerHTML += num0.innerHTML;
});
num1.addEventListener("click", function () {
  if (ekran.innerHTML.length < 12) ekran.innerHTML += num1.innerHTML;
});
num2.addEventListener("click", function () {
  if (ekran.innerHTML.length < 12) ekran.innerHTML += num2.innerHTML;
});
num3.addEventListener("click", function () {
  if (ekran.innerHTML.length < 12) ekran.innerHTML += num3.innerHTML;
});
num4.addEventListener("click", function () {
  if (ekran.innerHTML.length < 12) ekran.innerHTML += num4.innerHTML;
});
num5.addEventListener("click", function () {
  if (ekran.innerHTML.length < 12) ekran.innerHTML += num5.innerHTML;
});
num6.addEventListener("click", function () {
  if (ekran.innerHTML.length < 12) ekran.innerHTML += num6.innerHTML;
});
num7.addEventListener("click", function () {
  if (ekran.innerHTML.length < 12) ekran.innerHTML += num7.innerHTML;
});
num8.addEventListener("click", function () {
  if (ekran.innerHTML.length < 12) ekran.innerHTML += num8.innerHTML;
});
num9.addEventListener("click", function () {
  if (ekran.innerHTML.length < 12) ekran.innerHTML += num9.innerHTML;
});

ket.addEventListener("click", function () {
  let result = true;
  for (let i = 0; i < ekran.innerHTML.length; i++) {
    if (ekran.innerHTML[i] == ".") {
      result = false;
      break;
    }
  }
  if (result) {
    ekran.innerHTML += ket.innerHTML;
  }
});
jnjel.addEventListener("click", function () {
  ekran.innerHTML = "";
});

let number1;
let number2;
let gorc;

minusnshan.addEventListener("click", () => {
  if (ekran.innerHTML[0] != "-") {
    ekran.innerHTML = "-" + ekran.innerHTML;
  }
});
astichan.addEventListener("click", () => {
  number1 = Number(ekran.innerHTML);
  ekran.innerHTML = "";
  gorc = astichan.innerHTML;
});
jnjel1.addEventListener("click", () => {
  let arr = ekran.innerHTML.split("");
  arr.pop();
  ekran.innerHTML = arr.join("");
});

plus.addEventListener("click", () => {
  number1 = Number(ekran.innerHTML);
  ekran.innerHTML = "";
  gorc = plus.innerHTML;
});
minus.addEventListener("click", () => {
  number1 = Number(ekran.innerHTML);
  ekran.innerHTML = "";
  gorc = minus.innerHTML;
});
bazmapatkac.addEventListener("click", () => {
  number1 = Number(ekran.innerHTML);
  ekran.innerHTML = "";
  gorc = bazmapatkac.innerHTML;
});
bajanac.addEventListener("click", () => {
  number1 = Number(ekran.innerHTML);
  ekran.innerHTML = "";
  gorc = bajanac.innerHTML;
});
tokos.addEventListener("click", () => {
  number1 = Number(ekran.innerHTML);
  ekran.innerHTML = "";
  gorc = tokos.innerHTML;
});
qarakusi.addEventListener("click", () => {
  number1 = Number(ekran.innerHTML);
  ekran.innerHTML = number1 * number1;
});
armat.addEventListener("click", () => {
  number1 = Number(ekran.innerHTML);
  gorc = armat.innerHTML;
  ekran.innerHTML = Math.sqrt(number1);
});
havasar.addEventListener("click", () => {
  number2 = Number(ekran.innerHTML);
  if (gorc == "x") {
    ekran.innerHTML = number1 * number2;
  }
  if (gorc == "+") {
    ekran.innerHTML = number1 + number2;
  }
  if (gorc == "-") {
    ekran.innerHTML = number1 - number2;
  }
  if (gorc == "/") {
    ekran.innerHTML = number1 / number2;
  }
  if (gorc == "%") {
    ekran.innerHTML = (number1 * number2) / 100;
  }
  if (gorc == "xy") {
    ekran.innerHTML = Math.pow(number1, number2);
  }
});
