let accountNumber;
let accountBalance;

function init(an, ab) {
    accountNumber = an;
    accountBalance = ab;
}

function withdraw(amount) {
    accountBalance -= amount;
}

function deposit(amount) {
    accountBalance += amount;
}

function print() {
    return accountNumber + " -> " + accountBalance;
}

module.exports.init = init;
module.exports.withdraw = withdraw;
module.exports.deposit = deposit;
module.exports.print = print;
