//highlight.directive.ts
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class CustomDirective {

  constructor(el: ElementRef) {
 el.nativeElement.style.backgroundColor = 'cyan';
  }

}