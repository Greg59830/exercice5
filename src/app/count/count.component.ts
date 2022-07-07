import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})
export class CountComponent implements OnInit {
  counterValue:number = 0
  counterDisplay:string = this.counterValue.toString() 

  constructor() { }

  ngOnInit(): void {
  }

  onChangeCounter(value: number) {
    this.counterValue += value
    if (this.counterValue % 15 == 0 && this.counterValue != 0) this.counterDisplay = "FizzBuzz"
    else if (this.counterValue % 5 == 0 && this.counterValue != 0) this.counterDisplay = "Buzz"
    else if (this.counterValue % 3 == 0 && this.counterValue != 0) this.counterDisplay = "Fizz"
    else this.counterDisplay = this.counterValue.toString()
  }

  isText(str: string) {
    return isNaN(+str)
  }

}
