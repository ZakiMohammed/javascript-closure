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

module.exports = account;
