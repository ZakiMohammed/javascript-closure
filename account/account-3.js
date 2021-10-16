// basic encapsulation using constructor function ES6

class Account {
    constructor(number, type, baseAmount = 0) {
        let _number = number;
        let _type = type;
        let _balance = baseAmount;

        this.getNumber = () => _number;
        this.getType = () => _type;
        this.getBalance = () => _balance;
        this.withdraw = (amount) => amount > _balance ? 'Insufficient Balance' : (_balance = _balance - amount);
        this.deposit = (amount) => _balance = _balance + amount;
    }
}

module.exports = Account;
