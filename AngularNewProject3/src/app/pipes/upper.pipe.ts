import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upper',
  standalone: true
})
export class UpperPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    
    var name= value as string;
    //return name.toUpperCase();
    return `@${name.toUpperCase()}`;
  }

}
