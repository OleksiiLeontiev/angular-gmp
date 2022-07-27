import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, TranslateModule],
  declarations: [InputComponent],
  exports: [InputComponent],
})
export class InputModule {}
