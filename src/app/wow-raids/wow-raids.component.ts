import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../shared/database/database.service'

@Component({
  selector: 'app-wow-raids',
  templateUrl: './wow-raids.component.html',
  styleUrls: ['./wow-raids.component.css']
})
export class WowRaidsComponent implements OnInit {

  raids = [];
  raidToDisplay = 'Unknown';

  constructor(private databaseService: DatabaseService) { }

  ngOnInit(): void {
    this.getZones();
  }

  getZones() {
    this.databaseService.getZones().subscribe(res => {
      console.log(res);
      this.raids = []
      res.forEach(zone => {
        var raid = {
          "name": zone.name,
          "id": zone.id
        };
        if (raid.id.toString().startsWith("10")) {
          this.raids.push(raid);
        }
      });
    },
      error => {
        if (error) {
          console.log(error);
          this.raids = [{"name": "Error"}]
        }
      });
    console.log("Raids", this.raids);
  }

  clearZones() {
    this.raids = [];
  }

  display(raid: string) {
    this.raidToDisplay = raid;
  }

}
