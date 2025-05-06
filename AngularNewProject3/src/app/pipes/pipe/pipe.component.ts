import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UpperPipe } from "../upper.pipe";

@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [CommonModule, UpperPipe],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.scss'
})
export class PipeComponent implements OnInit{
  price:number=1250;
  mydate=new Date();
  person1:Person={firstName:"Melike",lastName:"Yılmaz",age:22}//bunu interface tanımlayarak yaptım ama illaki interface kullanmak zorunda değilim
  //interface ve classlar önemli: interface kullanmamızın sebebi tanımladığımız özelliklerin inheritance desteği ile yazmaya çalışırken direk çıkması ve işimizi kolaylaştırması
  person2:any={first:"Melike Nur",last:"Yılmazoğlu",age:23}//ben bu datayı tempplate tarafında json olarak kullanmak istiyorum
  //bu yüzden jsonpipe ı kullanacağız(template tarafı dediği html sayfasıdır)
  constructor(){
  }
  ngOnInit(): void {
    
  }
}
interface Person
{
  firstName:string;
  lastName:string;
  age:number;

}
