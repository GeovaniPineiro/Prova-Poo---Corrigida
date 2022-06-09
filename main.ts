import { Controle } from "./nota";
import prompt from "prompt - sync";

let control: Controle = new Controle(0, 0, 0);
let bteclado = prompt();
let option: number = 0;


while (option !== 9) {
    console.log(`==============Menu===============`);
    console.log('1. digite as notas                ');
    console.log('2. Sair               👉         ');
    console.log('=================================');

    option = +teclado('Ecolha uma ação : ');

    switch (option) {
        case 1:
         let n001:number =teclado ('digite a primeira nota: ');
         let n002:number =teclado ('digite a segunda nota: ');
         
         control.atribuir(n001, n002)
         control.Cmedia();

         console.log('');;
            break;
        case 2:

            break;
        default:
            break;
    }
}
