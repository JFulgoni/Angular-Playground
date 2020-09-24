import { Injectable } from '@angular/core';
import { Raider } from '../raider';

@Injectable({
  providedIn: 'root'
})
export class WowConstantsService {

  raiders: Raider[] = [
    new Raider(1, 'Frat', 'Hunter'),
    new Raider(2, 'Dredd', 'Tank'),
    new Raider(3, 'Aquadoria', 'Druid'),
    new Raider(4, 'Codie', 'Mage'),
    new Raider(5, 'Faede', 'Rogue'),
    new Raider(6, 'Murmandamus', 'Tank'),
    new Raider(7, 'Applesauce', 'Priest'),
    new Raider(8, 'Ken', 'Rogue'),
    new Raider(9, 'Kell', 'Priest'),
    new Raider(10, 'Andyt', 'Mage'),
    new Raider(11, 'Bodied', 'Warrior'),
    new Raider(12, 'Yeeeeee', 'Warlock'),
    new Raider(13, 'Roberta', 'Warlock'),
    new Raider(14, 'Sokol', 'Mage'),
    new Raider(15, 'Obamadin', 'Paladin'),
    new Raider(16, 'Mechnikov', 'Warrior'),
    new Raider(17, 'Teaa', 'Warrior'),
    new Raider(18, 'Broxigore', 'Warrior'),
    new Raider(19, 'Brisegenoux', 'Warrior'),
    new Raider(20, 'Jamoc', 'Mage'),
    new Raider(21, 'Pyromaniac', 'Mage'),
    new Raider(22, 'Dicdiddic', 'Paladin'),
    new Raider(23, 'Poppett', 'Hunter'),
    new Raider(24, 'Bowtalks', 'Hunter'),
    new Raider(25, 'Ruckfobey', 'Hunter'),
    new Raider(26, 'Illpwnutoo', 'Warlock'),
    new Raider(27, 'Krprincess', 'Warlock'),
    new Raider(28, 'Shapes', 'Tank'),
    new Raider(29, 'Hiboufache', 'Druid'),
    new Raider(30, 'Thehammr', 'Druid'),
    new Raider(31, 'Kendrick', 'Rogue'),
    new Raider(32, 'Agedpaladin', 'Paladin'),
    new Raider(33, 'Toushi', 'Rogue'),
    new Raider(34, 'Brynlee', 'Priest'),
    new Raider(35, 'Kevlarr', 'Rogue'),
    new Raider(36, 'Bioluminous', 'Paladin'),
    new Raider(37, 'Hails', 'Priest'),
    new Raider(38, 'Rawr', 'Paladin'),
    new Raider(39, 'Phylast', 'Warlock'),
    new Raider(40, 'Jip', 'Druid'),
    new Raider(41, 'Jengernell', 'Shadow'),
    new Raider(42, 'Nineinches', 'Tank'),
    new Raider(43, 'Jackblack', 'Warrior'),
    new Raider(44, 'Deadwin', 'Warrior'),
    new Raider(45, 'Knivesout', 'Rogue'),
    new Raider(46, 'Esfand', "Retribution")
  ];

  roleLimits = {
    "tank": 4,
    "warrior": 10,
    "paladin": 5,
    "hunter": 2,
    "rogue": 5,
    "druid": 2,
    "mage": 2,
    "warlock": 2,
    "priest": 6,
    "shadow": 0,
    "retribution:": 0
  }

  raidSize = 40;

  roleMap: Map<String, number>;

  constructor() { }

  getRaiders() {
    this.processRaiders();
    return this.raiders;
  }

  createRoleMap(): Map<String, number> {
    return new Map([
      ['tank', 0],
      ['warrior', 0],
      ['paladin', 0],
      ['hunter', 0],
      ['rogue', 0],
      ['druid', 0],
      ['mage', 0],
      ['warlock', 0],
      ['priest', 0],
      ['shadow', 0],
      ['retribution', 0]
    ]);
  }

  processRaiders() {
    this.roleMap = this.createRoleMap();
    // First get a collection of minimum raiders
    for(let raider of this.raiders) {
      let currentAmount = this.roleMap.get(raider.role.toLocaleLowerCase());
      let roleLimit = this.roleLimits[raider.role.toLocaleLowerCase()];
      if(currentAmount < roleLimit) {
        raider.selected = 'YES';
        this.roleMap.set(raider.role.toLocaleLowerCase(), currentAmount + 1);
      }
      else {
        raider.selected = 'NO';
      }
    }
    // Then pick who signed up first to fill
    let totalRaiders = this.getMapTotal();
    for(let raider of this.raiders) {
      if(raider.selected == 'NO' && totalRaiders < this.raidSize) {
        raider.selected = 'YES';
        totalRaiders += 1;
      }
    }
  }

  getMapTotal(): number {
    let total = 0;
    for(let key of this.roleMap.keys()) {
      total += this.roleMap.get(key);
    }
    return total;
  }

  getRoleLimits() {
    return this.roleLimits;
  }
}
