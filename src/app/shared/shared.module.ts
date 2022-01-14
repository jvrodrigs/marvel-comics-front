import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { ComicsComponent } from './comics/comics.component';
import { DetailDialogComponent } from './detail-dialog/detail-dialog.component';
import { SendGoogleMapsComponent } from './send-google-maps/send-google-maps.component';

import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {GoogleMapsModule} from '@angular/google-maps';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';


import localePT from '@angular/common/locales/pt';

registerLocaleData(localePT)

@NgModule({
  declarations: [
    HeaderComponent,
    SearchComponent,
    ComicsComponent,
    DetailDialogComponent,
    SendGoogleMapsComponent
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
    MatIconModule,
    GoogleMapsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-br' },
   ]
})
export class SharedModule { }
