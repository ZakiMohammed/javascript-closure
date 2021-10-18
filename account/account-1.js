// basic encapsulation using closure

function account(number, type, baseAmount = 0) {
    let _number = number;
    let _type = type;
    let _balance = baseAmount;
    return {
        getNumber: () => _number,
        getType: () => _type,
        getBalance: () => _balance,
        withdraw: (amount) => amount > _balance ? 'Insufficient Balance' : (_balance = _balance - amount),
        deposit: (amount) => _balance = _balance + amount
    };
}

const account1 = account(2001, 'Savings', 1000);

console.log('Number:', account1.getNumber());
console.log('Type:', account1.getType());
console.log('Balance:', account1.getBalance());

console.log('Balance:', account1.withdraw(200));
console.log('Balance:', account1.deposit(300));
console.log('Balance:', account1.deposit(300));
console.log('Balance:', account1.withdraw(30000));
console.log();

const account2 = account(4001, 'Current', 500);

console.log('Number:', account2.getNumber());
console.log('Type:', account2.getType());
console.log('Balance:', account2.getBalance());

console.log('Balance:', account2.withdraw(200));
console.log('Balance:', account2.deposit(1000));
