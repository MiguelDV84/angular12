import { Component, ElementRef, ViewChild } from '@angular/core';
import { BehaviorSubject, of, Subscription } from 'rxjs';
import { delay, filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular12';
  myStatus = 'my status';

  sw = true;
  swContainer = true;
  fontSize = 16;
  color = 'red';

  video = 1;
  ticktock = new BehaviorSubject(this.video);
  personASub: Subscription;

  @ViewChild('myDiv') myDiv: ElementRef;
  @ViewChild('myDiv2') myDiv2: ElementRef;
  @ViewChild('myCompTest') myCompTest: any;
  constructor(elementRef: ElementRef, elementRef2: ElementRef) {
    this.myDiv = elementRef;
    this.myDiv2 = elementRef2;

    this.personASub = this.ticktock
      .pipe(filter((subscriptor) => subscriptor % 2 === 0))
      .subscribe((v) => {
        console.log('PERSON A VIDEO', v);
      });

    this.ticktock.pipe(delay(4000)).subscribe((v) => {
      console.log('PERSON B VIDEO', v);
    });

    this.ticktock.subscribe((v) => {
      console.log('PERSON C VIDEO', v);
    });
  }

  onAddVideo() {
    this.ticktock.next(this.video++);
  }

  personaUnsubscribe() {
    this.personASub.unsubscribe();
  }

  printDataTest(event: any) {
    console.log('Data received from TestComponent:', event);
  }

  printData(event: any) {
    console.log('Data received from Test2Component:', event);
  }

  test(event: MouseEvent) {
    console.log('TEST', event);
  }

  onShowLocalVars() {
    console.log('myDiv', this.myDiv);
    console.log('myDiv2', this.myDiv2);
    console.log('myCompTest', this.myCompTest);
    this.myDiv2.nativeElement.value = 'Txosky';
    this.myCompTest.onClickTest();
  }
}
