import { CommonModule, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  standalone: true,
  imports: [NgIfComponent,NgIf,CommonModule],
  templateUrl: './ng-if.component.html',
  styleUrl: './ng-if.component.scss'
})
export class NgIfComponent implements OnInit{

  isShow=true;
  constructor(){
  }
  ngOnInit(): void {
  }
  showHide():void{
    this.isShow=!this.isShow;//sağdaki true ise false atayacak false ise true atayacak
  }

}
