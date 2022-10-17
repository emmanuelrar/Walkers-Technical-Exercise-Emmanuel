import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {

  title = 'Walker Test';

  numberList: any[] = [];

  numberForm = new FormGroup({
    number: new FormControl([], [Validators.required]),
  });

  AddNumber = () => {
    console.log(this.numberForm.value);

    this.numberList.push(this.numberForm.value.number);
  }

  numberTypeClass = (d: number) => {
    let cssClass = '';

    if (d % 3) {
      cssClass = 'walkers';
    } else if (d % 5) {
      cssClass = 'assessment';
    } else if (d % 3 && d % 5) {
      cssClass = 'both';
    }

    return cssClass;
  }

}
