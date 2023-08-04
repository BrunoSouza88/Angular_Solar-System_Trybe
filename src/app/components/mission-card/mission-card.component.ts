import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mission-card',
  templateUrl: './mission-card.component.html',
  styleUrls: ['./mission-card.component.css']
})
export class MissionCardComponent {
  @Input() name: string = '';
  @Input() year: string = '';
  @Input() country: string = '';
  @Input() destination: string = '';
}
