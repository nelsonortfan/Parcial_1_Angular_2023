import { Component, OnInit } from '@angular/core';
import { VehiculoService } from '../vehiculo.service';
import { Vehiculo } from '../vehiculo';
import { Marcas } from '../marcas';

@Component({
  selector: 'app-vehiculo-list',
  templateUrl: './vehiculo-list.component.html',
  styleUrls: ['./vehiculo-list.component.css']
})
export class VehiculoListComponent implements OnInit {

  constructor(private vehiculoService: VehiculoService) { }

  vehiculos: Array<Vehiculo> = []
  marcas: Array<Marcas> = []
  longitud1: number = 2;
  longitud: number = 2;
  num: number = 0
  numMarcas: number = 0;

  getVehiculos(){
    this.vehiculoService.getVehiculos().subscribe(vehiculos =>{
      this.vehiculos = vehiculos;
      this.longitud = this.vehiculos.length;
      this.getAgrupacionMarcas();
    });
  }

  getAgrupacionMarcas(){
    for(this.num = 0; this.num< this.longitud; this.num++){
      if(this.num == 0){
        this.marcas[0] = new Marcas(this.vehiculos[0].marca,1);
      }
      else {
        this.numMarcas = this.numMarcas + 1;
        this.marcas.forEach(element => {
          if(element.getMarca() == this.vehiculos[this.num].marca){
            this.marcas[this.num].incrementarCantidad();
          }
          else{
            this.marcas[this.numMarcas] = new Marcas(this.vehiculos[this.num].marca,1);
          }
        });
      }
    }
  }


  ngOnInit() {
    this.getVehiculos();
  }

}
