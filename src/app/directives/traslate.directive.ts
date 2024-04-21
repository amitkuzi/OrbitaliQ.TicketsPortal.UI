import { Directive, ElementRef, Input, AfterContentInit } from '@angular/core';
import { LangLocalsService } from '../Services/langLocals/lang-locals.service';

@Directive({
  selector: '[appTraslate]',
  standalone: true
})

export class TraslateDirective implements AfterContentInit {

  @Input() public appTraslate: string | undefined;

  constructor(
    private element: ElementRef<HTMLDivElement>,
    private langLocalsService: LangLocalsService,
  ) {
    console.log("TraslateDirective constructor");
  }

  ngAfterContentInit(): void {

    console.log("TraslateDirective ngAfterContentInit:", this.appTraslate);
    this.langLocalsService.getTranslate(this.appTraslate)?.subscribe((traslate) => {
      console.log("TraslateDirective ngAfterContentInit update:", traslate);
      this.element.nativeElement.textContent = traslate;
    });
  }
}



