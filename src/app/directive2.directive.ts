import {
  Directive,
  Input,
  OnChanges,
  SimpleChanges,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[ngIfTxosky]',
})
export class Directive2Directive implements OnChanges {
  private templateRef: TemplateRef<HTMLElement>;
  private viewContainerRef: ViewContainerRef;

  @Input() ngIfTxosky: boolean = true;

  constructor(
    templateRef: TemplateRef<HTMLElement>,
    viewContainerRef: ViewContainerRef
  ) {
    this.templateRef = templateRef;
    this.viewContainerRef = viewContainerRef;
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes', changes.ngIfTxosky.currentValue);
    this.setViewContainerRef(changes.ngIfTxosky.currentValue);
  }

  setViewContainerRef(show: boolean): void {
    if (!show) {
      this.viewContainerRef.clear();
      return;
    }
    this.viewContainerRef.createEmbeddedView(this.templateRef);
  }
}
