import { Pipe, PipeTransform } from '@angular/core';
import { globalEnvironment } from 'src/environments/environment';

@Pipe({
  name: 'cdn'
})
export class CdnPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    if(globalEnvironment.production) {
      return `${globalEnvironment.cdnHost}/${value}`;
    }
    return value;
  }

}
