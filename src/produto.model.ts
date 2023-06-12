export class Produto{

    id : number;
    codigo : string;
    nome: string;
    preco: number;

    constructor( codigo : string, nome : string,preco:number){
        this.nome = nome;
        this.codigo = codigo;
        this.preco = preco;
    }

}