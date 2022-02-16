import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unknownProperty',
})
export class UnknownPropertyPipe implements PipeTransform {
  transform(element: any, args?: any): string {
    return element || 'Unknown';
  }
}
