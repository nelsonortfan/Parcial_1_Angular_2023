import { VehiculoService } from './vehiculo.service';
import { Component, OnInit } from '@angular/core';
import { Vehiculo } from './vehiculo';

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.css']
})
export class VehiculoComponent implements OnInit {

  constructor(private vehiculoService: VehiculoService) { }

  vehiculos: Array<Vehiculo> = []

  getvehiculos(){
    this.vehiculoService.getVehiculos().subscribe(vehiculos =>{
      this.vehiculos = vehiculos;
    });
  }

  ngOnInit() {
    this.getvehiculos();
  }

}
