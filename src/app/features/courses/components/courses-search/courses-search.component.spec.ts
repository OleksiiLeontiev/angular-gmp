import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CoursesSearchComponent } from './courses-search.component';

describe('CoursesSearchComponent', () => {
  let component: CoursesSearchComponent;
  let fixture: ComponentFixture<CoursesSearchComponent>;
  let searchButton: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoursesSearchComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesSearchComponent);
    component = fixture.componentInstance;

    searchButton = fixture.debugElement.query(By.css('.jasmine-search-button'));
    component.searchValue = 'test';

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should trigger searchClick on search button click', () => {
    const searchClickSpy = spyOn(component, 'searchClick');
    searchButton.triggerEventHandler('click', null);

    expect(searchClickSpy).toHaveBeenCalled();
  });

  // it('searchClick works', () => {
  //   const consoleSpy = spyOn(console, 'log');
  //   component.searchClick();

  //   expect(consoleSpy).toHaveBeenCalledWith('test');
  // });
});
