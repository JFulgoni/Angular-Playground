import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../shared/database/database.service'

@Component({
  selector: 'app-wow-raids',
  templateUrl: './wow-raids.component.html',
  styleUrls: ['./wow-raids.component.css']
})
export class WowRaidsComponent implements OnInit {

  raids = [{
    "name" : "Loading...", 
    "bosses" : []
  }];
  bosses = ['Select a Raid in the left panel.'];

  constructor(private databaseService: DatabaseService) { }

  ngOnInit(): void {
    this.getZones();
  }

  getZones() {
    this.databaseService.getZones().subscribe(res => {
      // console.log(res);
      this.raids = []
      res.forEach(zone => {
        var raid = {
          "name": zone.name,
          "id": zone.id,
          "bosses" : this.getBosses(zone.encounters)
        };
        if (raid.id.toString().startsWith("10")) {
          this.raids.push(raid);
        }
      });
    },
      error => {
        if (error) {
          console.log(error);
          this.raids = [{"name": "Error", "bosses" : []}]
        }
      });
    // console.log("Raids", this.raids);
  }

  clearZones() {
    this.raids = [];
    this.bosses = ['Select a Raid in the left panel.'];
  }

  display(raid: string) {
    this.raids.forEach(myraid => {
      if (myraid.name == raid) {
        this.bosses = myraid.bosses;
      }
    });
  }

  getBosses(encounters = []) {
    let bosses = []
    encounters.forEach( encounter => {
      bosses.push(encounter.name);
    });
    return bosses;
  }

}
