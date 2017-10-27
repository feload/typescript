type BankAccount = { money: number, deposit: ( value: number) => number };

let bankAccount:BankAccount = {
  money: 2000,
  deposit: function (value: number) : number {
    return this.money += value;
  }
}

let myself: { name: string, bankAccount: BankAccount ,hobbies: string[] } = {
  name: "Max",
  bankAccount: bankAccount,
  hobbies: ["Sports", "Cooking"]
}

myself.bankAccount.deposit(3000);
console.log(myself);