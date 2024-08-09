import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'test-component',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent {
  @Input('status') status: string = '';

  @Output('onSendData') sendData = new EventEmitter();

  constructor() {}

  onClickTest(event: any) {
    console.log('Clicked', event);
    this.sendData.emit({
      nmae: 'miguel',
      status: 'ocupado',
    });
  }
}
