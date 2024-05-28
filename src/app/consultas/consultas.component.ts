import { Component, OnInit } from '@angular/core';
import { BinddingService } from '../services/bindding.service';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.css']
})
export class ConsultasComponent implements OnInit{
  constructor(private bindding:BinddingService){}
  
  ngOnInit(): void {
    this.sendDataToParent()
  }

  sendDataToParent() {
    this.bindding.sendData({'menuIndex':'service', 'optionIndex':1});
  }
}
