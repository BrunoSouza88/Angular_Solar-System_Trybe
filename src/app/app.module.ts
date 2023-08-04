import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SolarSystemComponent } from './components/solar-system/solar-system.component';
import { TitleComponent } from './components/title/title.component';
import { PlanetCardComponent } from './components/planet-card/planet-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SolarSystemComponent,
    TitleComponent,
    PlanetCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
