import { CommonModule, NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  standalone: true,
  imports: [CommonModule,NgStyleComponent,NgStyle],
  templateUrl: './ng-style.component.html',
  styleUrl: './ng-style.component.scss'
})
export class NgStyleComponent implements OnInit{

  number=3;//101'dan küçük ise kırmızı 10'dan büyük ise mavi olsun

  style:any={'background-color':'red'}
  constructor(){

  }
  ngOnInit(): void {
   
  }

}
