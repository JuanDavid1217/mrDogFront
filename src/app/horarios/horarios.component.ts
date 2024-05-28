import { Component, OnInit } from '@angular/core';
import { BinddingService } from '../services/bindding.service';

@Component({
  selector: 'app-horarios',
  templateUrl: './horarios.component.html',
  styleUrls: ['./horarios.component.css']
})
export class HorariosComponent implements OnInit{
  constructor(private bindding:BinddingService){}
  
  ngOnInit(): void {
    this.sendDataToParent()
  }

  sendDataToParent() {
    this.bindding.sendData({'menuIndex':'schedule', 'optionIndex':null});
  }

}
