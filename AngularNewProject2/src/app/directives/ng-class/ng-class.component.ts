import { CommonModule, NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  standalone: true,
  imports: [CommonModule,NgClassComponent,NgClass],
  templateUrl: './ng-class.component.html',
  styleUrl: './ng-class.component.scss'
})
export class NgClassComponent implements OnInit{

  isLarge=true;
  isRedBox=true;
  isBorder=true;
  css:any={large:true,redBox:true,blueBorder:false}
  constructor(){

  }
  ngOnInit(): void {
    
  }
  applyClass(){
    this.isLarge=!this.isLarge;//true ise false yapıyor false ise true yapıyor
    this.isRedBox=!this.isRedBox;
    this.isBorder=!this.isBorder;
  }

}
