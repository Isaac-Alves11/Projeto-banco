class contaCorrente{
    agencia;
    //#saldo para campos privados! https://github.com/tc39/proposal-class-fields#private-fields
    _saldo;

    sacar(valor){
        if(this.saldo >= valor){
            this.saldo -= valor;
            return valor;
        }
    }

    depositar(valor){
        if(valor < 0){
           return;
        }
            this.saldo += valor;
    }
}
