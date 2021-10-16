// const Account = require('./account-1')
// const Account = require('./account-2')
const Account = require('./account-3')

const account1 = new Account(2001, 'Savings', 1000);

console.log('Number:', account1.getNumber());
console.log('Type:', account1.getType());
console.log('Balance:', account1.getBalance());

console.log('Balance:', account1.withdraw(200));
console.log('Balance:', account1.deposit(300));
console.log('Balance:', account1.deposit(300));
console.log('Balance:', account1.withdraw(30000));
console.log();

const account2 = new Account(4001, 'Current', 500);

console.log('Number:', account2.getNumber());
console.log('Type:', account2.getType());
console.log('Balance:', account2.getBalance());

console.log('Balance:', account2.withdraw(200));
console.log('Balance:', account2.deposit(1000));