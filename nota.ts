export class Controle {
    constructor(
        private _nota001: number,
        private _nota002: number,
        private _sn: number
    ) { }

    public get nota001(): number {
        return this._nota001;
    }

    public set nota001(nota001: number) {
        this._nota001 = nota001;
    }

    public get nota002(): number {
        return this._nota002;
    }

    public set nota002(nota002: number) {
        this._nota002 = nota002;
    }

    public get sn(): number {
        return this._sn;
    }

    public set sn(sn: number) {
        this._sn = sn;
    }
        

    atribuir(n1: number, n2: number): void {
        this.nota001 = n1;
        this.nota002 = n2;
        
    }

    Cmedia(): void {
        this.sn = (this.nota001 + this.nota002) / 2;
        console.log('');
        console.log ('a nota do aluno foi: ' + this.sn);
        if (this.sn <= 59.9) {

            console.log('Media para passar: 60 ');
            console.log('');
            console.log('o aluno foi: Reprovado');
            
            

        } else {

            console.log('Media para passar: 60 ');
            console.log('');
            console.log('o aluno foi: Aprovado ');
            
            

        }
 
 }


}