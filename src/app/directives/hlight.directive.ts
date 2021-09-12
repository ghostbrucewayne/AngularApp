import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHlight]'
})
export class HlightDirective {

  // constructor(el: ElementRef) { 
  //   el.nativeElement.style.backgroundColor='yellow';
  // }

  constructor(private el: ElementRef,private renderer: Renderer2) {
    //el.nativeElement.style.backgroundColor = 'yellow';
    }
    @HostBinding('style.border') border: string | undefined;
    @HostListener('click') onClick(){
      window.alert("Host Element Clicked");
    }
    @HostListener('mouseleave') onMouseLeave() {
      this.el.nativeElement.style.backgroundColor = 'red';
      //this.ChangeColor('red');
    }
    @HostListener('mouseover') onMouseOver() {
      this.el.nativeElement.style.backgroundColor = 'blue';
      this.border = '5px solid green';
      //this.ChangeColor('blue');
    }

}
