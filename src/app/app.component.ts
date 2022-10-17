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

}
