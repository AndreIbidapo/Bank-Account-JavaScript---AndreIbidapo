const Transaction = require('../src/Transaction.js');
const Statement = require('../src/Statement.js');
const BankAccount = require('../src/Account.js');
const assert = require("assert");


// Test the Transaction class
const transaction = new Transaction("10/01/2012", 1000.00, 0.00);
assert.deepEqual(
    transaction,
    { date: "10/01/2012", credit: 1000.00, debit: 0.00 },
    "Transaction is not working as expected"
);

// Test the Statement class
const statement = new Statement([
    new Transaction("10/01/2012", 1000.00, 0.00),
    new Transaction("13/01/2012", 2000.00, 0.00),
    new Transaction("14/01/2012", 0.00, 500.00)
]);
assert.deepEqual(
    statement.generate(),
    [
        { date: "10/01/2012", credit: 1000.00, debit: 0.00, balance: 1000.00 },
        { date: "13/01/2012", credit: 2000.00, debit: 0.00, balance: 3000.00 },
        { date: "14/01/2012", credit: 0.00, debit: 500.00, balance: 2500.00 }
    ],
    "Statement is not working as expected"
);

// Test the BankAccount class
const account = new BankAccount();
account.deposit(1000);
account.deposit(2000);
account.withdraw(500);
assert.deepEqual(
    account.getStatement().generate(),
    [
        { date: "10/01/2012", credit: 1000.00, debit: 0.00, balance: 1000.00 },
        { date: "13/01/2012", credit: 2000.00, debit: 0.00, balance: 3000.00 },
        { date: "14/01/2012", credit: 0.00, debit: 500.00, balance: 2500.00 }
    ],
    "BankAccount is not working as expected"
);

console.log("All tests pass");