export class Marcas {

  marca: string;
  cantidad: number;

  public constructor(marca:string, cantidad:number){
    this.marca = marca;
    this.cantidad = cantidad;
  }

  public incrementarCantidad(){
    this.cantidad = this.cantidad + 1;
  }

}
