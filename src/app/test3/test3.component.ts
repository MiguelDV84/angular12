import {
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-test3',
  templateUrl: './test3.component.html',
  styleUrls: ['./test3.component.css'],
})
export class Test3Component implements OnInit, OnChanges, DoCheck {
  @Input() name = '';

  constructor() {
    console.log('constructor');
  }

  ngOnInit() {
    console.log('ngOnInit');
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges', changes);
  }
  ngDoCheck() {
    console.log('ngDoCheck');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }
  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
}
