var bankAccount = {
    money: 2000,
    deposit: function (value) {
        return this.money += value;
    }
};
var myself = {
    name: "Max",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};
myself.bankAccount.deposit(3000);
console.log(myself);
//# sourceMappingURL=exercise.js.map