import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss']
})
export class PromiseComponent implements OnInit {

  constructor() { }

  DellAvailable() {
    return true
  }

  HpAvailable() {
    return false
  }

  public promiseVal: any;
  dell = {
    brand: 'Dell',
    hardDisk: '2TB',
    color: 'Black'
  }

  hp = {
    brand: 'Hell',
    hardDisk: '1TB',
    color: 'Silver'
  }

  notAvail = {
    brand: 'not avaiable',
    status: 'failed'
  }

  ngOnInit(): void {
    //let buyLaptop = new Promise(function(resolve,reject){
    //  resolve('promise is resolved')
    //});

    let buyLaptop = new Promise((resolve, reject) => {
      //resolve('promise is resolved')
      //reject('promise is reject')
      if (this.DellAvailable()) {
        setTimeout(() => {
          //resolve('purchased dell')
          resolve(this.dell)
        }, 3000)
      }
      else if (this.HpAvailable()) {
        setTimeout(() => {
          //resolve('purchased HP')
          resolve(this.hp)
        }, 3000)
      }
      else {
        //reject('no stock available')
        resolve(this.notAvail)
      }

    });

    buyLaptop.then(res => {
      console.log('then code => ', res)
      this.promiseVal = res;
    })
      .catch(res => {
        console.log('then code => ', res)
        this.promiseVal = res;
      });
  }

}
