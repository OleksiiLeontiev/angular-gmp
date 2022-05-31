import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { AuthorizationService } from '../../services';

@Directive({
  selector: '[appIfAuthenticated]',
})
export class IfAuthenticatedDirective {
  private hasView = false;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private authorizationService: AuthorizationService
  ) {}

  @Input() set appIfAuthenticated(condition: boolean) {
    if (
      ((condition && this.authorizationService.isAuthenticated()) ||
        (!condition && !this.authorizationService.isAuthenticated())) &&
      !this.hasView
    ) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (
      ((!condition && this.authorizationService.isAuthenticated()) ||
        (condition && !this.authorizationService.isAuthenticated())) &&
      this.hasView
    ) {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }
}
