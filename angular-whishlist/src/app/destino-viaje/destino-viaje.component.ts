import { Component, OnInit, Input, HostBinding, EventEmitter } from '@angular/core';
import { DestinoViaje } from './../models/destino-viaje.model';

@Component({
  selector: 'app-destino-viaje',
  templateUrl: './destino-viaje.component.html',
  styleUrls: ['./destino-viaje.component.css']
})
export class DestinoViajeComponent implements OnInit {
  
  @Input() destino:DestinoViaje;

  @HostBinding('attr.class') cssClass="col-md-4";

  clicked: EventEmitter<DestinoViaje>;

  constructor() {
    
   }

  ngOnInit(): void {
  }

  ir(){
    this.clicked.emit(this.destino)
    return false;
  }

}
