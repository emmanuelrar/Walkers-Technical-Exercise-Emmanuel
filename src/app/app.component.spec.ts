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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule
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
    const noNumberText = fixture.debugElement.nativeElement.querySelector('.no-numbers');
    expect(noNumberText.textContent).toContain('You must add numbers to check if they are walkers, assesments or both.');
  });

  it('should add 2 new numbers at click', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const appComponent = fixture.componentInstance;

    const buttonSubmit = fixture.debugElement.nativeElement.querySelector('.sumbit-button');
    appComponent.numberForm.controls["number"].setValue(12);
    fixture.detectChanges();
    buttonSubmit.click();

    expect(appComponent.numberList.length).toBe(1);
  });


  it('should have called numberTypeClass with number 3', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const appComponent = fixture.componentInstance;

    spyOn(appComponent, 'numberTypeClass');

    const buttonSubmit = fixture.debugElement.nativeElement.querySelector('.sumbit-button');
    appComponent.numberForm.controls["number"].setValue(3);
    fixture.detectChanges();
    buttonSubmit.click();

    expect(appComponent.numberTypeClass).toHaveBeenCalledWith(3, false);
  });

  it('number 5 should be assessment class', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const appComponent = fixture.componentInstance;

    let result = appComponent.numberTypeClass(5, false);

    expect(result).toContain('assessment');
  });

  it('number 3 should be walkers class', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const appComponent = fixture.componentInstance;

    let result = appComponent.numberTypeClass(3, false);

    expect(result).toContain('walkers');
  });

  it('number 15 should be walkers class', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const appComponent = fixture.componentInstance;

    let result = appComponent.numberTypeClass(15, false);

    expect(result).toContain('walkers assessment');
  });
});
