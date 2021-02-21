import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FrontComponent } from './front/front.component';
import { PacsComponent } from './pacs/pacs.component';
import { RisComponent } from './ris/ris.component';
import { AdvantageComponent } from './advantage/advantage.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FrontComponent,
    PacsComponent,
    RisComponent,
    AdvantageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
