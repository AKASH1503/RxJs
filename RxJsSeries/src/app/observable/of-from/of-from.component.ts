import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { DesignUtilityService } from 'src/app/appService/design-utility.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.scss']
})
export class OfFromComponent implements OnInit {

  obsMessage: any;
  constructor(private _designUtility: DesignUtilityService) { }

  ngOnInit(): void {

    //OF
    const obs1 = of('Anup', 'Akash', 'Prakash');

    obs1.subscribe((res) => {
      console.log(res);
      this._designUtility.print(res, 'elContainer');
    });

    const obs2 = of({ a: 'Anup', b: 'Akash', c: 'Prakash' });

    obs2.subscribe((res) => {
      this.obsMessage = res;
      console.log(this.obsMessage);
    });

    //From
    const obs3 = from(['Anup', 'Akash', 'Prakash']);

    obs3.subscribe((res) => {
      console.log(res);
      this._designUtility.print(res, 'elContainer3');
    });
  }

}
