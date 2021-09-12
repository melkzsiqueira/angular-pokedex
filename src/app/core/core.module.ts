import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PoNavbarModule } from '@po-ui/ng-components';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, PoNavbarModule],
  exports: [HeaderComponent],
})
export class CoreModule {}
