
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mapitemsDebug',
  standalone: true
})
export class MapitemsDebugPipe implements PipeTransform {
  transform(value: unknown) {
    return JSON.stringify(value);
  }
}
