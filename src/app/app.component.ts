import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BinddingService } from './services/bindding.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit, OnDestroy{

  constructor(private cdr: ChangeDetectorRef, private router:Router, private activateRouter:ActivatedRoute, private bindding:BinddingService){}

  subscription: any;
  receivedData: any;
  
  title = 'mrdog-front'
  selected = "service"
  selection=0
  isProtected=0
  options:any=[
    {
      "id_paquete":1,
      "nombre":"Estetica Canina"
    },
    {
      "id_paquete":2,
      "nombre":"Consultas Veterinarias"
    },
    {
      "id_paquete":3,
      "nombre":"Boutique"
    }
  ]

  ngOnInit(): void {
    /*Hacer peticion de categorias*/

    this.subscription = this.bindding.data$.subscribe(data => {
      for(let i=0; i<this.options.length; i++){
        this.options[i]={
          "id_paquete":this.options[i].id_paquete,
          "nombre":this.options[i].nombre,
          "status":false
        }
      }
      this.receivedData = data;
      if(data.optionIndex!=null  && this.options.length>0){
        this.options[data.optionIndex].status=true;
      }
      this.selected=data.menuIndex??'service'
      this.cdr.detectChanges();
    });
  }

  
  select(){
    if (this.selection==0){
      this.selection=1
      this.isProtected=1
    }else{
      this.selection=0
      this.isProtected=0
    }
  }

  navigate(index:any){
    this.selected='service'
    this.selection=0
    this.isProtected=0
    this.vaciar();
    this.options[index].status=true
    switch (index){
      case 0:
        this.router.navigate(["/estetica"]);
        break;
      case 1:
        this.router.navigate(["/consultas"]);
        break;
      default:
        this.router.navigate(["/boutique"]);
    }
  }

  vaciar(){
    for(let i=0; i<this.options.length; i++){
      this.options[i].status=false
    }
  }

  change(){
    this.isProtected=0;
    this.selection=0
    this.selected='schedule'
    this.vaciar()
    this.router.navigate(["/horarios"]);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
