import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-two-way-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './two-way-binding.component.html',
  styleUrl: './two-way-binding.component.scss'
})

export class TwoWayBindingComponent implements OnInit{

  name:string | undefined;
  constructor(){

  }
  ngOnInit(): void {
    
  }

}
