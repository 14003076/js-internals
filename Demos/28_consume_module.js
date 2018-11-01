var account = require('./27_module');

account.init(1, 2000);

account.withdraw(200);

console.log(account.print());

account.deposit(500);

console.log(account.print());
