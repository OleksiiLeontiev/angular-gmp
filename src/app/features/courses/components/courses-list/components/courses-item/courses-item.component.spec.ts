import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { TimePipe } from 'src/app/shared';

import { CoursesItemComponent } from './courses-item.component';

describe('CoursesItemComponent', () => {
  let component: CoursesItemComponent;
  let fixture: ComponentFixture<CoursesItemComponent>;
  let deleteButton: DebugElement;
  let editButton: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoursesItemComponent, TimePipe],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesItemComponent);
    component = fixture.componentInstance;

    component.course = {
      id: 1,
      title: 'Video Course 1. Name tag',
      creationDate: '08/28/2020',
      duration: 88,
      description:
        "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.",
      topRated: true,
    };

    deleteButton = fixture.debugElement.query(By.css('.jasmine-delete-button'));
    editButton = fixture.debugElement.query(By.css('.jasmine-edit-button'));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should raise deleteClick event when clicked deleteButton', () => {
    const editEventSpy = spyOn(component.deleteEvent, 'emit');

    deleteButton.triggerEventHandler('click', null);
    expect(editEventSpy).toHaveBeenCalled();
  });

  it('should raise editClick event when clicked editButton', () => {
    const editEventSpy = spyOn(component.editEvent, 'emit');

    editButton.triggerEventHandler('click', null);
    expect(editEventSpy).toHaveBeenCalled();
  });
});
