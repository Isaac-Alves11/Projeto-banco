import {cliente} from "./Cliente.js"
import {contaCorrente} from "./ContaCorrente.js"


const cliente1 = new cliente("Ricardo", 11122233309);

const contaCorrenteRicardo = new contaCorrente();
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.cliente = cliente1;
contaCorrenteRicardo.depositar(500);


const cliente2 = new cliente("Alice", 88822233309 );

let valor = 200;
contaCorrenteRicardo.transferir(200, cliente2);


console.log(cliente2);
