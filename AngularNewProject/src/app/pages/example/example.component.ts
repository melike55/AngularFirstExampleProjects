import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [],
  templateUrl: './example.component.html',
  styleUrl: './example.component.scss'
})
export class ExampleComponent implements OnInit{

  name:string="melike";
  constructer(){ }
  ngOnInit(): void {
  }
 
}
