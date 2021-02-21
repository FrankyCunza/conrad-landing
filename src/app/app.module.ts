import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FrontComponent } from './front/front.component';
import { PacsComponent } from './pacs/pacs.component';
import { RisComponent } from './ris/ris.component';
import { AdvantageComponent } from './advantage/advantage.component';
import { SolutionComponent } from './solution/solution.component';
import { FooterComponent } from './footer/footer.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FrontComponent,
    PacsComponent,
    RisComponent,
    AdvantageComponent,
    SolutionComponent,
    FooterComponent,
    GalleryComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
