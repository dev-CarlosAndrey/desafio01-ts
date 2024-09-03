import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (amount: number): void => {
    if (this.getStatus()) {
      this.setBalance(this.getBalance() + amount)
      console.log(`Você pegou um emprestimo de R$${amount}`)
    } else {
      console.log('Não é possivel pegar um empréstimo com a conta inativa.');
    }
  }
}
