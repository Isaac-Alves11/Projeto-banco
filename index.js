import {cliente} from "./Cliente.js"
import {contaCorrente} from "./ContaCorrente.js"


const cliente1 = new cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;
cliente1.rg = 123456789;

//const cliente2 = new cliente();
//cliente2.nome = "Alice";
//cliente2.cpf = 88822233309;

const contaCorrenteRicardo = new contaCorrente();
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.cliente = cliente1;
contaCorrenteRicardo.depositar(500);


const conta2 = new contaCorrente();
conta2.cliente = new cliente();
conta2.cliente.nome = "Alice";
conta2.cpf = 88822233309
conta2.agencia = 102;

let valor = 200;
contaCorrenteRicardo.transferir(200, conta2);


console.log(valor);
console.log(conta2);
console.log(contaCorrenteRicardo);