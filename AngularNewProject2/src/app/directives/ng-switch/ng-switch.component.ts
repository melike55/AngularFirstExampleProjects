import { Component, OnInit } from '@angular/core';
import { Product, Type } from '../../models/product';
import { CommonModule, NgSwitch } from '@angular/common';

@Component({
  selector: 'app-ng-switch',
  standalone: true,
  imports: [CommonModule,NgSwitchComponent,NgSwitch],
  templateUrl: './ng-switch.component.html',
  styleUrl: './ng-switch.component.scss'
})
export class NgSwitchComponent implements OnInit{

  product:Product;
  constructor(){
    this.product=new Product(1,"kalem 1",Type.Middle);
  }
  ngOnInit(): void {
    
  }

}
