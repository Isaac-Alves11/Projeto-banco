export class contaCorrente{
    agencia;
    _cliente;

    set cliente(novoValor){
        if (novoValor instanceof cliente)
       this._cliente = novoValor;

    }
    get cliente(){
       return this._cliente;
    }



    //#saldo para campos privados! https://github.com/tc39/proposal-class-fields#private-fields
    _saldo = 0;

    get _saldo(){
        return this._saldo;
    }

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

    transferir(valor, conta) {
        const valorSacado  = this.sacar(valor);
        conta.depositar(valorSacado);
        conta.cidade = "São Paulo";

    }
} 
