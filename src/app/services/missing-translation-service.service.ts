import { Injectable } from '@angular/core';
import { MissingTranslationHandler, MissingTranslationHandlerParams } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class MissingTranslationServiceService
  implements MissingTranslationHandler
{
  constructor() {}
  handle(params: MissingTranslationHandlerParams) {
    return `WARN: '${params.key}' is missing in '${params.translateService.currentLang}' locale`;
  }
}
