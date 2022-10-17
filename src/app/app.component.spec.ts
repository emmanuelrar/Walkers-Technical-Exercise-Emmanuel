import { Component, DebugElement } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatListModule,
        MatInputModule,
        MatToolbarModule,
        MatCardModule,
        MatButtonModule,
        BrowserAnimationsModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should render 3 number-List`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const appComponent = fixture.componentInstance;
    appComponent.numberList = [1, 2, 3];
    fixture.detectChanges();

    const numberList = fixture.debugElement.queryAll(By.css('#number-List'));
    expect(numberList.length).toEqual(3);
  });

  it('should render no-numbers', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const noNumberText = fixture.debugElement.nativeElement.querySelector('.no-numbers');
    expect(noNumberText.textContent).toContain('You must add numbers to check if they are walkers, assesments or both.');
  });

  it('should add 2 new numbers at click', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const appComponent = fixture.componentInstance;
    
    const buttonSubmit = fixture.debugElement.nativeElement.querySelector('.sumbit-button');
    const numberInput = fixture.debugElement.nativeElement.querySelector('#numberToAdd');
    numberInput.value = 45;
    buttonSubmit.click();
    numberInput.value = 12;
    buttonSubmit.click();

    expect(appComponent.numberList.length).toBe(2);
  });
});
