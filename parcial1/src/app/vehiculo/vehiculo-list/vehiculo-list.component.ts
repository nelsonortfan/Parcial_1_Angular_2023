import { Vehiculo } from './../vehiculo';
import { Component, OnInit } from '@angular/core';
import { VehiculoService } from '../vehiculo.service';
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

  getVehiculos(){
    this.vehiculoService.getVehiculos().subscribe(vehiculos =>{
      this.vehiculos = vehiculos;
      this.getAgrupacionMarcas();
    });
  }

  getAgrupacionMarcas(){
    let set = new Set<string>();
    this.vehiculos.forEach(element => {
      set.add(element.marca);
    });
    for (let currentString of set) {
      this.marcas.push(new Marcas(currentString,0));
    }
    this.marcas.forEach(element => {
      this.vehiculos.forEach(element2 => {
        if(element.marca == element2.marca){
          element.incrementarCantidad();
        }
      });
    });
  }

  ngOnInit() {
    this.getVehiculos();
  }

}
