import { Component, OnInit, ViewChild } from '@angular/core';
import { DatabaseService } from '../shared/database/database.service'
import { Raider } from '../shared/raider'
import { WowConstantsService } from '../shared/wow-constants/wow-constants.service';

import { MatSort } from '@angular/material/sort';
import { PageEvent, MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-wow-raids',
  templateUrl: './wow-raids.component.html',
  styleUrls: ['./wow-raids.component.css']
})
export class WowRaidsComponent implements OnInit {
  columnsToDisplay= ['order', 'name', 'role', 'selected']

  currentRoster = new MatTableDataSource<Raider>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  pageSize = 10;
  pagelength = 10;
  pageSizeOptions: number[] = [10, 20, 40];
  pageEvent: PageEvent;

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }

  raids = [{
    "name": "Loading...",
    "bosses": []
  }];
  bosses = ['Select a Raid in the left panel.'];

  constructor(private databaseService: DatabaseService, private wowConstantsService: WowConstantsService) { }

  ngAfterViewInit() {
    this.currentRoster.sort = this.sort;
    this.currentRoster.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.getZones();
    this.currentRoster.data = this.wowConstantsService.getRaiders();
  }

  getZones() {
    this.databaseService.getZones().subscribe(res => {
      // console.log(res);
      this.raids = []
      res.forEach(zone => {
        var raid = {
          "name": zone.name,
          "id": zone.id,
          "bosses": this.getBosses(zone.encounters)
        };
        if (raid.id.toString().startsWith("10")) {
          this.raids.push(raid);
        }
      });
    },
      error => {
        if (error) {
          console.log(error);
          this.raids = [{ "name": "Error", "bosses": [] }]
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
    encounters.forEach(encounter => {
      bosses.push(encounter.name);
    });
    return bosses;
  }

  doFilter = (value: String) => {
    this.currentRoster.filter = value.trim().toLocaleLowerCase();
  }

}
