import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { DesignUtilityService } from 'src/app/appService/design-utility.service';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss']
})
export class FromEventComponent implements OnInit, AfterViewInit {
  @ViewChild('addBtn', { static: false }) addBtn: ElementRef;

  constructor(private _designUtility:DesignUtilityService) {

  }
  ngAfterViewInit(): void {
    let count = 0;
    fromEvent(this.addBtn.nativeElement, 'click').subscribe(res => {
      let countVal = 'Video ' + count++
      console.log('viedo', countVal);
      this._designUtility.print(countVal, 'elContainer');
      this._designUtility.print(countVal, 'elContainer2');
    });
  }

  ngOnInit(): void {
  }
}
