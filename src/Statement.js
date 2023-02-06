class Statement {
    constructor(transactions) {
        this.transactions = transactions;
    }

    generate() {
        let balance = 0.00;
        return this.transactions.map(transaction => {
            balance += transaction.credit - transaction.debit;
            return {
                date: transaction.date,
                credit: transaction.credit,
                debit: transaction.debit,
                balance: balance
            };
        });
    }
}

module.exports = Statement;