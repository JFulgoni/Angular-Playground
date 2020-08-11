import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../shared/database/database.service'

@Component({
  selector: 'app-db-actions',
  templateUrl: './db-actions.component.html',
  styleUrls: ['./db-actions.component.css']
})
export class DbActionsComponent implements OnInit {

  age = '';
  firstName = '';
  resultMessage = '';
  failure = false;
  success = false;
  panelOpenState = false;
  characterName = '';
  raids = [];

  constructor(private databaseService: DatabaseService) { }

  ngOnInit() {
    this.resetAllFields();
  }

  resetResultFields() {
    this.resultMessage = '';
    this.failure = false;
    this.success = false;
  }

  resetAllFields() {
    this.age = '';
    this.firstName = '';
    this.characterName = '';
    this.resetResultFields();
  }

  printValues() {
    this.resetResultFields();
    this.databaseService.updateRow(this.firstName, this.age).subscribe(res => {
      console.log(res);
      this.resultMessage = "Success!";
      this.success = true;
    },
      error => {
        if (error) {
          console.log(error);
          this.resultMessage = error.statusText + " (" + error.status + ") : " + error.error;
          this.failure = true;
        }
      });
  }

  getCharacterInformation() {
    this.databaseService.getParse(this.characterName).subscribe(res => {
      console.log(res);
      this.resultMessage = "Success!";
      this.success = true;
    },
      error => {
        if (error) {
          console.log(error);
          this.resultMessage = error.statusText + " (" + error.status + ") : " + error.error;
          this.failure = true;
        }
      });
  }

  getZones() {
    this.databaseService.getZones().subscribe(res => {
      console.log(res);
      this.resultMessage = "Success!";
      this.success = true;
      this.raids = []
      res.forEach(zone => {
        let raid = {
          "name": zone.name
        };
        this.raids.push(raid);
      });
    },
      error => {
        if (error) {
          console.log(error);
          this.resultMessage = error.statusText + " (" + error.status + ") : " + error.error;
          this.failure = true;
          this.raids = [{"name": "Unable to find any raids"}]
        }
      });
  }

  clearZones() {
    this.raids = [];
  }

  allValuesPresent() {
    return this.validateString(this.firstName) && this.validateNumeric(this.age);
  }

  characterNamePresent() {
    return this.validateString(this.characterName);
  }

  validateString(string: String) {
    return string && (string.trim().length != 0);
  }

  validateNumeric(string: String) {
    return this.validateString(string) && !isNaN(+string) && !string.endsWith('.');
  }

}
