import { ComponentFixture, TestBed } from '@angular/core/testing';
import { COURSES } from '../../mocks/mock-courses';

import { CoursesListComponent } from './courses-list.component';

describe('CoursesListComponent', () => {
  let component: CoursesListComponent;
  let fixture: ComponentFixture<CoursesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoursesListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesListComponent);
    component = fixture.componentInstance;
    component.courses = COURSES;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('loadMoreClick works', () => {
    const consoleSpy = spyOn(console, 'log');
    component.loadMoreClick();

    expect(consoleSpy).toHaveBeenCalledWith('Load more');
  });

  it('deleteCourse works', () => {
    const consoleSpy = spyOn(console, 'log');
    component.deleteCourse(component.courses[0]);

    expect(consoleSpy).toHaveBeenCalledWith(
      `delete id=${component.courses[0].id}`
    );
  });

  it('editCourse works', () => {
    const consoleSpy = spyOn(console, 'log');
    component.editCourse(component.courses[0]);

    expect(consoleSpy).toHaveBeenCalledWith(
      `edit id=${component.courses[0].id}`
    );
  });
});
