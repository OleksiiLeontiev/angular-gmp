import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective implements OnChanges {
  @Input('appHighlight') public creationDate!: string;

  constructor(private element: ElementRef) {}

  public ngOnChanges(): void {
    let color = null;
    const creationDate = new Date(this.creationDate);
    const currentDate = new Date();

    if (
      creationDate < currentDate &&
      creationDate >= new Date(Date.now() - 1000 * 60 * 60 * 24 * 14)
    ) {
      color = 'green';
    } else if (creationDate > currentDate) {
      color = 'blue';
    }

    this.element.nativeElement.style.borderColor = color;
  }
}
