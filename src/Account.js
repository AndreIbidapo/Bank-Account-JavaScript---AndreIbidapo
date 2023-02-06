const Transaction = require(`./Transaction.js`);
const Statement = require(`./Statement.js`);

class BankAccount {
    constructor() {
        this.transactions = [];
    }

    deposit(amount) {
        this.transactions.push(new Transaction(new Date(), amount, 0));
    }

    withdraw(amount) {
        this.transactions.push(new Transaction(new Date(), 0, amount));
    }

    getStatement() {
        return new Statement(this.transactions);
    }
}

module.exports = BankAccount;