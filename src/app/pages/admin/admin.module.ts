import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { Admin2Component } from './admin2/admin2.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [AdminComponent, Admin2Component],
  exports: [AdminComponent, Admin2Component],
})
export class AdminModule {}
