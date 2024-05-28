import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor() { }

  url="http://localhost:5003/api/"

  header={
    "Content-Type": "application/json"
  }

  getError(error:any){
    console.log(error)
    window.alert("Error al cargar el contenido!");
  }

  async getData(complement:string){
    let response=await axios.get(this.url+complement)
    return response.data;
  }

  async getCategories(){
    try{
      return await this.getData("Categoria");
    }catch(error){
      this.getError(error);
    }
  }

  async getProducts(){
    try{
      return await this.getData("Producto");
    }catch(error){
      this.getError(error);
    }
  }

  async getSizes(){
    try{
      return await this.getData("TallasMascota");
    }catch(error){
      this.getError(error);
    }
  }

  async getPackages(){
    try{
      return await this.getData("Paquete");
    }catch(error){
      this.getError(error);
    }
  }
}
