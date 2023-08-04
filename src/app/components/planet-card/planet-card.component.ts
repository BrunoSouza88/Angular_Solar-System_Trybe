import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-planet-card',
  templateUrl: './planet-card.component.html',
  styleUrls: ['./planet-card.component.css']
})
export class PlanetCardComponent {
  @Input() planetName: string = "";
  @Input() planetImage: string = "";
}
