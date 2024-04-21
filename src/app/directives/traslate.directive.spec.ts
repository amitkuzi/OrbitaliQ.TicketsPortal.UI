import { TraslateDirective } from './traslate.directive';
import { LangLocalsService } from '../Services/langLocals/lang-locals.service';
import { ElementRef } from '@angular/core';

const mockElementRef = new ElementRef(null);
const directive = new TraslateDirective(mockElementRef, mockLangLocalsService);
const mockLangLocalsService = new LangLocalsService();
it('should create an instance', () => {
  const directive = new TraslateDirective(mockElementRef, mockLangLocalsService);
  expect(directive).toBeTruthy();
});

