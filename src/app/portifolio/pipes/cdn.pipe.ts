import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

@Pipe({
  name: 'cdn'
})
export class CdnPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    if(environment.production) {
      return `${environment.cdnHost}/${value}`;
    }
    return value;
  }

}
