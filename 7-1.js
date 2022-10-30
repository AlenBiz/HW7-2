
const postomat = [null, null, null, "4", null];
let customer = {
  "balance": "100",
  "codeFromSMS": "A001DFX0"
};

console.log(customer);
console.log(postomat);

let codeForPostomat = "A001DFX0";
console.log(codeForPostomat);

//“Вы получили посылку из ячейки 4 и ваш счет составляет: …р.”
const statuspackage = function() {
  codeForPostomat = customer.["codeFromSMS"]
  ? console.log(“Вы получили посылку из ячейки "4" и ваш счет составляет: 0 р.)
  : console.log("Введите правильный код")  
}
console.log(statuspackage);