const postomat = [null, null, null, "4", null];
console.log(postomat.includes("4"));

let customer = {
    balance: 100,
    kodFromSms: "A001DFX0"

};
console.log(customer);

function SayStatus (kodForPostomat) {
    if (customer.kodFromSms == kodForPostomat)
    {
        console.log(`Вы получили посылку из ячейки 4 и ваш счет составляет: ${(customer.balance) - 100} р.`);
    }
};

SayStatus ("A001DFX0");



