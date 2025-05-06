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
    }

    class Car 
    {
        product:Product={Name:"kalem 1",Price:200}
        //istersek bu değerleri constructer da da atayabiliriz
        constructer(product:Product){
            this.product={Name:"kalem 1",Price:200};
        }
        
    }
//bir interface i değişken tipi olarak kullanabiliriz buradaki örnekte olduğu gibi
//interfaceler classlardan daha esnektir
