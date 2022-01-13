import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SearchComponent
  ],
  exports: [
    HeaderComponent,
    SearchComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
