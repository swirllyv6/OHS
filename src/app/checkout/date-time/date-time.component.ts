import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.component.html',
  styleUrls: ['./date-time.component.css']
})
export class DateTimeComponent implements OnInit {

  dateTime = [
    {
      date: 16,
      day: 'Mon',
      time: [
        10, 11, 12, 1, 2, 3, 4, 5
      ]
    },
    {
      date: 17,
      day: 'Tue',
      time: [
        10, 11, 12, 1, 2, 3, 4, 5
      ]
    },
    {
      date: 18,
      day: 'Wed',
      time: [
        10, 11, 12, 1, 2, 3, 4, 5
      ]
    },
    {
      date: 19,
      day: 'Thus',
      time: [
        10, 11, 12, 1, 2, 3, 4, 5
      ]
    },
    {
      date: 20,
      day: 'Fri',
      time: [
        10, 11, 12, 1, 2, 3, 4, 5
      ]
    }
  ];
  constructor( private _bottomSheetRef: MatBottomSheetRef<DateTimeComponent> ) { }

  ngOnInit(): void {
  }

  // 
  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
