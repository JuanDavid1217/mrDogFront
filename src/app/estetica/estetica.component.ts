import { Component, OnInit } from '@angular/core';
import { BinddingService } from '../services/bindding.service';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-estetica',
  templateUrl: './estetica.component.html',
  styleUrls: ['./estetica.component.css']
})
export class EsteticaComponent implements OnInit{
  constructor(private bindding:BinddingService, private api:ApiService){}
  
  tamanos:any=[
    /*{
      "id_talla":1,
      "talla":"Chico",
      "aumento_precio":0
    },
    {
      "id_talla":2,
      "talla":"Mediano",
      "aumento_precio":5
    },
    {
      "id_talla":3,
      "talla":"Grande",
      "aumento_precio":10
    },
    {
      "id_talla":4,
      "talla":"Gigante",
      "aumento_precio":15
    }*/
  ]

  paquetes:any=[
    /*{
      "id_paquete":1,
      "nombre":"Baño antipulgas",
      "descripcion":"Descripción completa......",
      "precio_base":100.00
    },
    {
      "id_paquete":2,
      "nombre":"Baño completo y Corte de pelo",
      "descripcion":"Descripción completa......",
      "precio_base":300.00
    },
    {
      "id_paquete":3,
      "nombre":"Solo corte de pelo",
      "descripcion":"Descripción completa......",
      "precio_base":150.00
    }*/
  ]

  optionSize=0;
  optionPaquete=0;
  image=1
  response=0
  sizeSelected:any//this.tamanos[this.optionSize]
  paqueteSelected:any//this.paquetes[this.optionPaquete]
  nombre=""//this.paqueteSelected.nombre
  descripcion=""//this.paqueteSelected.descripcion
  precio_base=0//this.paqueteSelected.precio_base
  aumento_precio=0//this.sizeSelected.aumento_precio
  talla=""//this.sizeSelected.talla

  initizalizeSelected(){
    this.sizeSelected = this.tamanos[this.optionSize]
    this.paqueteSelected = this.paquetes[this.optionPaquete]
    this.nombre=this.paqueteSelected.nombre
    this.descripcion=this.paqueteSelected.descripcion
    this.precio_base=this.paqueteSelected.precio_base
    this.aumento_precio=this.sizeSelected.aumento_precio
    this.talla=this.sizeSelected.talla
  }

  async ngOnInit(){
    this.sendDataToParent()
    this.tamanos = await this.api.getSizes();
    this.paquetes = await this.api.getPackages();
    this.initizalizeSelected()
  }

  sendDataToParent() {
    this.bindding.sendData({'menuIndex':'service', 'optionIndex':0});
  }

  changeSize(){
    this.sizeSelected=this.tamanos[this.optionSize]
  }

  changePaquete(){
    this.paqueteSelected=this.paquetes[this.optionPaquete]
  }

  cotizar(){
    if(this.image==1){
      this.image=0
      this.response=1
    }
    this.initizalizeSelected()
  }

  ok(){
    this.response=0
    this.image=1
  }
}
