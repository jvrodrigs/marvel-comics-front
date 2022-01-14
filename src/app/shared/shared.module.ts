import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { ComicsComponent } from './comics/comics.component';
import { DetailDialogComponent } from './detail-dialog/detail-dialog.component';

import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';

import localePT from '@angular/common/locales/pt';

registerLocaleData(localePT)

@NgModule({
  declarations: [
    HeaderComponent,
    SearchComponent,
    ComicsComponent,
    DetailDialogComponent
  ],
  exports: [
    HeaderComponent,
    SearchComponent,
    ComicsComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-br' },
   ]
})
export class SharedModule { }
