import { Injectable } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Injectable()
export class MenuService {

  constructor(public translate: TranslateService) {}

  getAll() {
    return [
      {
        link: '/dashboard/me/establecimiento',
        label: this.translate.instant('Local'),
        icon: 'store'
      },
      {
        link: '/dashboard/carta',
        label: this.translate.instant('Carta'),
        externalRedirect: true,
        icon: 'local_library'
      },
      {
        link: 'http://primer.nyasha.me/docs',
        label: this.translate.instant('Estadísticas'),
        externalRedirect: true,
        icon: 'trending_up'
      }
    ];
  }
}
