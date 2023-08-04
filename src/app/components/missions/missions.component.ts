import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-missions',
  templateUrl: './missions.component.html',
  styleUrls: ['./missions.component.css']
})
export class MissionsComponent implements OnInit {
  missions: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('/assets/data/missions.json').subscribe(
      (data) => {
        this.missions = data;
      },
      (error) => {
        console.error('Error loading missions:', error);
      }
    );
  }
  trackByFn(_index: number, mission: any) {
    return mission.name;
  }
}
