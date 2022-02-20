import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unknownProperty',
})
export class UnknownPropertyPipe implements PipeTransform {
  transform(element: string): string {
    return element || 'Unknown';
  }
}
