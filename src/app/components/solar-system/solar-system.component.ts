import { Component } from '@angular/core';
import planetsData from '../../../assets/data/planets.json';

@Component({
  selector: 'app-solar-system',
  templateUrl: './solar-system.component.html',
  styleUrls: ['./solar-system.component.css']
})
export class SolarSystemComponent {
  solarSystemHeadline = "Sistema Solar";
  planetList = planetsData;
}
