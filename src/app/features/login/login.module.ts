import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'src/app/shared';

@NgModule({
  imports: [CommonModule, FormsModule, ButtonModule],
  declarations: [LoginComponent],
  exports: [LoginComponent],
})
export class LoginModule {}
