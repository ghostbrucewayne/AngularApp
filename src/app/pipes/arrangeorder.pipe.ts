import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrangeorder'
})
export class ArrangeorderPipe implements PipeTransform {

  transform(value: string, before:string, after:string): string {
    const newStr = `${before} ${value} ${after}`;
    return newStr;
  }

}
