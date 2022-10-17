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

  it(`should have as title 'Walker Test'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Walker Test');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('Walker Test app is running!');
  });

  xit('should add new number at click', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    const buttonSubmit = fixture.debugElement.nativeElement.querySelector('.sumbit-button');
    const numberListElement = fixture.debugElement.queryAll(By.css('#number-List'));
    const numberInput = fixture.debugElement.nativeElement.querySelector('#numberToAdd');
    numberInput.value = 45;
    buttonSubmit.click();

    expect(numberListElement.length).toBe(0);
  });
});
