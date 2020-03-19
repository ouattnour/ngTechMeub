import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaulImage'
})
export class DefaulImagePipe implements PipeTransform {

  transform(value: string, ...args: any[]): string {
   if (!value){
     return 'meb.jpg';
   } else {
     return value;
   }
  }

}
