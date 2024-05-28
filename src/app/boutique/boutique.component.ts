import { Component, OnInit } from '@angular/core';
import { BinddingService } from '../services/bindding.service';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-boutique',
  templateUrl: './boutique.component.html',
  styleUrls: ['./boutique.component.css']
})

export class BoutiqueComponent implements OnInit{

  constructor(private bindding:BinddingService, private api:ApiService){}
  
  input=""

  position=0

  filterList:any=[]

  productList:any=[
    /*{
      "id_producto":1,
      "nombre":"Gel antibacterial",
      "descripcion":"Descripcion....",
      "precio_venta":1,
      "descuento":0,
      "id_categoria":1
    },
    {
      "id_producto":2,
      "nombre":"Gel para cabello",
      "descripcion":"Descripcion....",
      "precio_venta":1,
      "descuento":1,
      "id_categoria":3
    },
    {
      "id_producto":3,
      "nombre":"Gelatina sabor limón",
      "descripcion":"Descripcion....",
      "precio_venta":1,
      "descuento":0,
      "id_categoria":2
    }*/
  ]

  productList2=this.productList

  categorias:any=[
    /*{
      "id_categoria":1,
      "categoria":"Alimentos"
    },
    {
      "id_categoria":2,
      "categoria":"Medicina veterinaria"
    },
    {
      "id_categoria":3,
      "categoria":"Juguetes y Accesorios"
    }*/
  ]

  searchList:any=[]

  async ngOnInit(){
    this.sendDataToParent()
    this.categorias=await this.api.getCategories();
    this.productList=await this.api.getProducts();
    this.productList2=this.productList
  }

  sendDataToParent() {
    this.bindding.sendData({'menuIndex':'service', 'optionIndex':2});
  }


  buscar(){
    this.filterbase()
    //if(this.input!=""){
    this.productList = this.productList.filter(
        // especifica la propiedad y el valor
      (product:any) => product.nombre.toLowerCase().includes(this.input.toLowerCase())
    );
    //}else{
    //  this.productList=this.productList2;
    //}
  }

  autocomplite(){
    if (this.input==""){
      this.searchList=[]
    }else{
      this.searchList = this.productList.filter(
        // especifica la propiedad y el valor
        (product:any) => product.nombre.toLowerCase().includes(this.input.toLowerCase())
      );
    }
  }

  enterPressed(e:any, enter:HTMLInputElement){
    if(e.key == 'Enter'){
      this.buscar()
      enter.blur()
      this.searchList=[]
    }
  }

  onClickItem(item:any){
    this.input=item.nombre;
    this.searchList=[]
    this.buscar()
  }

  filter(option:any){
    if (this.filterList.includes(option)){
      this.filterList.splice(this.filterList.indexOf(option),1)
    }else{
      this.filterList.push(option)
    }
    this.filterbase();
  }

  filterbase(){
    if(this.filterList.length==0 || this.filterList.length==3){
      this.productList=this.productList2
    }else{
      this.productList = this.productList2.filter(
        // especifica la propiedad y el valor
        (product:any) => this.filterList.includes(product.id_categoria)
      );
    }
  }
}
