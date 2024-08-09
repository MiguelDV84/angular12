import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';

@Directive({
  selector: '[appDirectiveTest]',
})
export class DirectiveDirective {
  private element: ElementRef;

  @Input() appDirectiveTest: string = 'aqua';
  @Output() outPutTest = new EventEmitter<any>();

  @HostListener('window:click') onClick() {
    this.setBackgroundColor(this.appDirectiveTest);
    this.outPutTest.emit('Clicked');
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setBackgroundColor(this.appDirectiveTest);
    this.outPutTest.emit('Mouse entered');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBackgroundColor('green');
    this.outPutTest.emit('Mouse left');
  }

  constructor(element: ElementRef) {
    this.element = element;
    this.setBackgroundColor(this.appDirectiveTest);
    this.element.nativeElement.style.color = 'black';
    this.element.nativeElement.style.border = '3px solid green';
  }

  setBackgroundColor(color: string) {
    this.element.nativeElement.style.backgroundColor = color;
  }
}
