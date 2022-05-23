import { TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { HighlightDirective } from './highlight.directive';

const dayTime = 1000 * 60 * 60 * 24;
const greenDate = new Date(Date.now() - dayTime * 7).toLocaleDateString();
const blueDate = new Date(Date.now() + dayTime).toLocaleDateString();

@Component({
  selector: 'app-test-component',
  template: '',
})
class TestComponent {}

describe('HighlightDirective', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HighlightDirective, TestComponent],
    });
  });

  it('Highlight directive works correctly', () => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `<div class="green-element" [appHighlight]="${greenDate}"></div>
        <div class="blue-element" [appHighlight]="${blueDate}"></div>
        <div class="default-element" [appHighlight]="02/03/2020"></div>`,
      },
    });
    TestBed.compileComponents().then(() => {
      const fixture = TestBed.createComponent(TestComponent);
      const greenEl = fixture.debugElement.query(By.css('green-element'));
      const blueEl = fixture.debugElement.query(By.css('blue-element'));
      const defaultEl = fixture.debugElement.query(By.css('default-element'));
      expect(greenEl.nativeElement.style.borderColor).toBe('green');
      expect(blueEl.nativeElement.style.borderColor).toBe('blue');
      expect(defaultEl.nativeElement.style.borderColor).toBeNull();
    });
  });
});
