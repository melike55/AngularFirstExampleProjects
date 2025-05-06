import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-ng-onchange-hook',
  standalone: true,
  imports: [],
  templateUrl: './ng-onchange-hook.component.html',
  styleUrl: './ng-onchange-hook.component.scss'
})
export class NgOnchangeHookComponent implements OnInit,OnChanges{
  @Input() count:number |undefined;//daha sonra değerini vericem değerini daha atamadım
  
  constructor(){

  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);//count her değiştiğinde bu metot tetiklenir
  }
  
  ngOnInit(): void {
    
  }

}
