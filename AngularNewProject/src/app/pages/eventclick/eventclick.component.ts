import { Component, OnInit } from '@angular/core';
import { NgOnchangeHookComponent } from "../ng-onchange-hook/ng-onchange-hook.component";

@Component({
  selector: 'app-eventclick',
  standalone: true,
  imports: [NgOnchangeHookComponent],
  templateUrl: './eventclick.component.html',
  styleUrl: './eventclick.component.scss'
})
//one -way binding:typesript te bir şey değiştiği zaman html de de değişiyor
export class EventclickComponent implements OnInit{

  count:number=1;
  constructor(){
    console.log("Constructor Çalıştı!");
  }
  ngOnInit(): void {
    console.log("ngOnInit Çalıştı!");
  }

  writeToConsole():void{
    console.log("Click");
  }

  increaseCount():void 
  {
    this.count++;
  }
}
