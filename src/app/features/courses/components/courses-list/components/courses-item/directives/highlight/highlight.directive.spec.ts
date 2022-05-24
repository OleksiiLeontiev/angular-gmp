import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { HighlightDirective } from './highlight.directive';

const dayTime = 1000 * 60 * 60 * 24;

@Component({
  template: `<div class="green-border" [appHighlight]="greenDate"></div>
    <div class="blue-border" [appHighlight]="blueDate"></div>
    <div class="default-border" [appHighlight]="defaultDate"></div> `,
})
class TestHighlightComponent {
  greenDate: string = new Date(Date.now() - dayTime * 7).toLocaleDateString(
    'en-US'
  );
  blueDate: string = new Date(Date.now() + dayTime).toLocaleDateString('en-US');
  defaultDate: string = '05/05/2020';
}

describe('Directive: Highlight', () => {
  let component: TestHighlightComponent;
  let fixture: ComponentFixture<TestHighlightComponent>;
  let greenEl: DebugElement;
  let blueEl: DebugElement;
  let defaultEl: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestHighlightComponent, HighlightDirective],
    });
    fixture = TestBed.createComponent(TestHighlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    greenEl = fixture.debugElement.query(By.css('.green-border'));
    blueEl = fixture.debugElement.query(By.css('.blue-border'));
    defaultEl = fixture.debugElement.query(By.css('.default-border'));
  });

  it('Highlight directive works correctly', () => {
    expect(greenEl.nativeElement.style.borderColor).toBe('green');
    expect(blueEl.nativeElement.style.borderColor).toBe('blue');
    expect(defaultEl.nativeElement.style.borderColor).toBe('');
  });
});
