export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  deposit = (amount: number): void => {
    if(this.validateStatus()){
      if (amount > 0) {
        this.balance += amount
        console.log(`Você depositou ${amount}. Saldo atual: ${this.balance}`)
      } else {
        console.log('O valor do deposito deve ser maior que zero')
      }
    }
  }

  withdraw = (amount: number): void => {
    if (this.validateStatus()) {
      if (amount > 0 && this.balance >= amount) {
        this.balance -= amount;
        console.log(`Você sacou ${amount}. Saldo atual: ${this.getBalance()}`);
      } else if (amount <= 0) {
        console.log('O valor do saque deve ser maior que zero.');
      } else {
        console.log('Saldo insuficiente para realizar o saque.');
      }
    }
  }

  getBalance = (): number => {
    return this.balance
  }

  protected setBalance = (amount: number): void => {
    this.balance = amount 
  }

  getStatus = (): boolean => {
    return this.status
  }

  setStatus = (status: boolean): void => {
    this.status = status
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
