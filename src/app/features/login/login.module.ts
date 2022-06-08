import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { ButtonModule, InputModule } from 'src/app/shared';

@NgModule({
  imports: [CommonModule, FormsModule, ButtonModule, InputModule],
  declarations: [LoginComponent],
  exports: [LoginComponent],
})
export class LoginModule {}
