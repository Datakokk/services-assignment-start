import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  num: number = 0;
  num2: number = 0;
  constructor() { }

  contar(){
    this.num++;
    console.log("toInactive"+this.num);
  };
  
  contar2(){
      this.num2++;
      console.log("toActive"+this.num2);
  };
}
