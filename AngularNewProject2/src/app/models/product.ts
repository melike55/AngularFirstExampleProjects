export class Product {
    id:number;
    name:string;
    type:Type;

    constructor(id:number,name:string,type:Type){
        this.id=id;
        this.name=name;
        this.type=type;
    }
}
export enum Type
{
    Big=1,
    Middle=2,
    Small=3
}
//Bunlarla tipe göre dil göstermek istiyorum
