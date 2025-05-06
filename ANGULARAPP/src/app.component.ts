    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        title= 'angularapp';
        name:string="ahmet";
    
    }
    interface Product
    {
        Name:string;
        Price:number;
        SayHello:()=>string;
        SayHello2():void;
    }

    class Car implements Product
    {
        Name:string;
        Price:number;
        constructer(name:string,price:number)
        {
            this.Name=name;
            this.Price=price;
        }
        SayHello2():void{
            console.log("merhaba");
        }
        SayHello(){
            return "merhaba";
        }
        
    }

function SayHello2() {
    throw new Error('Function not implemented.');
}
