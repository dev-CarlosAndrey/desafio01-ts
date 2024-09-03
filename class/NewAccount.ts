import { DioAccount } from "./DioAccount";

export class NewAccount extends DioAccount {
    constructor (name: string, accountNumber: number) {
        super (name, accountNumber)
    }

    deposit = (amount: number): void => {
        if (this.getStatus()){
            if (amount > 0){
                const bonus = 10
                const totalAmount = amount + bonus
                this.setBalance(this.getBalance() + totalAmount)
                console.log(`Você depositou ${amount}, com bônus de 10. Saldo atual: ${this.getBalance()} `)
            } else {
                console.log('Error: O valor do deposito deve ser maior que zero')
            }
        } else {
            ('Conta inativa. Não é possivel depositar.')
        }
    }
}