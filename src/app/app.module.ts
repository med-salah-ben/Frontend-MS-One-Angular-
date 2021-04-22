import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeronnePhysiqueComponent } from './peronne-physique/peronne-physique.component';
import { PersPhyListComponent } from './Peronne-Physique/pers-phy-list/pers-phy-list.component';
import { PersPhyComponent } from './Peronne-Physique/pers-phy/pers-phy.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PeronnePhysiqueComponent,
    PersPhyListComponent,

  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
