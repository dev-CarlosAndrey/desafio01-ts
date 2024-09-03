import { CompanyAccount } from "./class/CompanyAccount";
import { PeopleAccount } from "./class/PeopleAccount";
import { NewAccount } from "./class/NewAccount";

// Testando a classe PeopleAccount

const peopleAccount: PeopleAccount = new PeopleAccount(1, "Nath", 10);
console.log(peopleAccount);

// Fazendo um depósito na conta da pessoa
peopleAccount.deposit(50);
console.log(peopleAccount);

// Testando todos metodos da classe ComapanyAccount

const companyAccount: CompanyAccount = new CompanyAccount("DIO", 20);
companyAccount.getLoan(5000);
console.log(`Saldo após o empréstimo: R$${companyAccount.getBalance()}`);
console.log(companyAccount);

companyAccount.setStatus(false);
companyAccount.getLoan(3000);

console.log(`Saldo final: R$${companyAccount.getBalance()}`);

companyAccount.deposit(100);
console.log(companyAccount);

// Testando a nova Conta craida de acordo com desafio

const newAccount = new NewAccount("Carlos Andrey", 10);
console.log(`Saldo inicial: R$${newAccount.getBalance()}`);

newAccount.deposit(10000);

console.log(`Saldo após deposito $${newAccount.getBalance()}`);

newAccount.deposit(-50);
