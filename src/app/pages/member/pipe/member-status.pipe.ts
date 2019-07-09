import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'memberStatus'
})
export class MemberStatusPipe implements PipeTransform {
  transform(value: string, args?: any): any {
    switch (value) {
      case 'Y':
        return '啟用';
      case 'N':
        return '停用';
      case 'D':
        return '註銷';
    }
  }
}
