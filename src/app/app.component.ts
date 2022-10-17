import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {

  title = 'Walker Test';
  numberList: number[] = []


  addNumber = (number: HTMLInputElement) => {
    this.numberList.push(parseInt(number.value));
    number.value = '';
  }

}
