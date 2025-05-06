import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-ngfor',
  standalone: true,
  imports: [CommonModule,NgforComponent],
  templateUrl: './ngfor.component.html',
  styleUrl: './ngfor.component.scss'
})
export class NgforComponent implements OnInit{

  names:string[]=["ahmet","mehmet","hasan"]
  userList:User[]=[];
user: any;

  constructor(){
    this.userList.push(new User(1,"melike","melike@gmail.com"))
    this.userList.push(new User(2,"mert","mert@gmail.com"))
    this.userList.push(new User(3,"irem","irem@gmail.com"))
  }

  ngOnInit(): void {
    
  }

}
