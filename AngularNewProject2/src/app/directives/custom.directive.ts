import { Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective implements OnInit{

  constructor(private element:ElementRef) { 
   /* element.nativeElement.style.backgroundColor="red";//typescript javasripti kapsar bu yüzden burada tamamen javascript yazabilirsin
    console.log("custom directive background color çalışmadı");*/
  }
 
 ngOnInit(): void {
    this.element.nativeElement.style.backgroundColor="red";
    console.log("custom directive background color çalışmadı");
  }

}
