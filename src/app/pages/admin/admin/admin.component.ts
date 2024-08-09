import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  name = 'txosky';
  auxJson = {
    name: 'Mike',
    lastName: 'Díaz',
  };

  auxObservable$ = new BehaviorSubject<number[]>([1, 2, 3]);
  constructor() {}

  ngOnInit(): void {}

  onAdd(): void {
    const aux = this.auxObservable$.getValue();
    const aux1 = [...aux, 4, 5, 8, 9, 3];
    this.auxObservable$.next(aux1);
  }
}
