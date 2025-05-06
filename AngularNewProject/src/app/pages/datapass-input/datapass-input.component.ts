import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-datapass-input',
  standalone: true,
  imports: [],
  templateUrl: './datapass-input.component.html',
  styleUrl: './datapass-input.component.scss'
})
export class DatapassInputComponent implements OnInit {
 
  @Input() name:string | undefined;
  constructor(){}
  
  ngOnInit(): void {
    
  }

}
