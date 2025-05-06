import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-examples2',
  standalone: true,
  imports: [],
  template:`<h1>İkinci Component</h1><p>{{email}}</p>`,
  styles:[`.h1{color:red}`]
})
export class Examples2Component implements OnInit{
  
  email:string="melike@gmail.com"
  constructer()
  {
  }
  ngOnInit(): void {
  }

}
