import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {

  title = 'Walker Test';
  howManyToShow = 20;

  minToShow = 0;
  maxToShow = this.howManyToShow;

  numberList: any[] = [];

  numberForm = new FormGroup({
    number: new FormControl(0, [Validators.required]),
  });

  AddNumber = () => {
    console.log(this.numberForm.value);

    let numberToAdd: number = this.numberForm.value.number!;

    this.numberList.push({ value: numberToAdd, type: this.numberTypeClass(numberToAdd, false) });
  }

  numberTypeClass = (d: number, classFormat: boolean = true): string => {
    let cssClass = '';

    if (d % 3 === 0 && d % 5 === 0) {
      cssClass = 'walkers-assessment';
    } else if (d % 3 === 0) {
      cssClass = 'walkers';
    } else if (d % 5 === 0) {
      cssClass = 'assessment';
    } else {
      cssClass = 'none'
    }

    if (!classFormat) {
      cssClass = cssClass.replace('-', ' ');
    }

    if (new Date().getDay() == 1 && !classFormat) {
      cssClass += '-m';
    }

    return cssClass;
  }

  Next() {
    this.minToShow += this.howManyToShow;
    this.maxToShow += this.howManyToShow;
  }

  Prev() {
    this.minToShow -= this.howManyToShow;
    this.maxToShow -= this.howManyToShow;
  }

}
