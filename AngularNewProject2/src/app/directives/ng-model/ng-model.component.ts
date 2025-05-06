import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-ng-model',
  standalone: true,
  imports: [CommonModule,NgModelComponent,FormsModule],
  templateUrl: './ng-model.component.html',
  styleUrl: './ng-model.component.scss'
})
export class NgModelComponent implements OnInit {

  name:string="Melike"
  constructor(){

  }
  ngOnInit(): void {
   
  }

}
