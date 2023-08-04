import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Importe o HttpClientModule

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SolarSystemComponent } from './components/solar-system/solar-system.component';
import { TitleComponent } from './components/title/title.component';
import { PlanetCardComponent } from './components/planet-card/planet-card.component';
import { MissionsComponent } from './components/missions/missions.component';
import { MissionCardComponent } from './components/mission-card/mission-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SolarSystemComponent,
    TitleComponent,
    PlanetCardComponent,
    MissionsComponent,
    MissionCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule // Adicione o HttpClientModule aqui
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
