import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css'],
})
export class Test2Component {
  @Input() name: string = '';
  @Input() lastName: string = '';
  @Output() onSendData = new EventEmitter();

  myVar: number = 1;
  myVar2: number = 2;
  constructor() {}

  test(event: any) {
    console.log(this.myVar + this.myVar2);
  }
  onShowData() {
    this.onSendData.emit(
      `general data ${this.name} ${this.lastName} is being shown`
    );
  }
}
