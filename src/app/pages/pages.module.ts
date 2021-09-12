import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PoPageModule } from '@po-ui/ng-components';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, PoPageModule],
  exports: [HomeComponent],
})
export class PagesModule {}
