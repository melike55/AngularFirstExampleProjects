import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular_proje';
  /*
  name:string="ahmet";
  İsUser:boolean=false;

  constructor()
  {
      //backtick
      console.log(`name :${this.name}`);
      //console.log("title :"+this.name);
      console.log(`İsUser :${this.İsUser}`);
  }
*/
}

class Product
{
  //fields
  name:string;
  price:number;
  category:string;
  IsPublish:boolean;

  constructor(name:string,price:number,category:string,IsPublish:boolean)
  {
    this.name=name;
    this.price=price;
    this.category=category;
    this.IsPublish=IsPublish;
  }

Topla(a1:number,a2:number):number
{
  return a1 + a2;
}

}

class product2 extends Product
{

  constructor(name:string,price:number,category:string,IsPublish:boolean)
  {
    super(name,price,category,IsPublish);
  }
  method2()
  {
    this.Topla(5,6);
  }
}