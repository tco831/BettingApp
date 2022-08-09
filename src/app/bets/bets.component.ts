import { Component, OnInit, Input } from '@angular/core';
import { Location } from '../location';
import { APIService, Bet } from '../API.service';

@Component({
  selector: 'app-bets',
  templateUrl: './bets.component.html',
  styleUrls: ['./bets.component.scss'],
})
export class BetsComponent implements OnInit {
  constructor(private api: APIService) {}

  async ngOnInit() {
    const result = await this.api.ListBets();
    this.allBets = result.items;
  }

  // obtain Geo data from maps component
  mapsDataImport(event: any) {
    this.targetLocation = event.target;
    this.currentLocation = event.current;
  }

  // generally used geo measurement function
  distanceBetweenTwoCoords(
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number
  ) {
    const R = 6378.137; // Radius of earth in KM
    const dLat = (lat2 * Math.PI) / 180 - (lat1 * Math.PI) / 180;
    const dLon = (lon2 * Math.PI) / 180 - (lon1 * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c;
    return d * 1000; // meters
  }

  // convert timestamp into datetime
  timestampToDatetime(timestamp: number) {
    let date = new Date(timestamp);
    let dateTimeString =
      date.getFullYear() +
      '-' +
      ('0' + (date.getMonth() + 1)).slice(-2) +
      '-' +
      ('0' + date.getDate()).slice(-2) +
      'T' +
      ('0' + date.getHours()).slice(-2) +
      ':' +
      ('0' + date.getMinutes()).slice(-2);
    return dateTimeString;
  }

  // variables for bet mutations
  currentTimestamp: any = Date.now();

  currentDateTime: any = this.timestampToDatetime(this.currentTimestamp);

  allBets: any[] = [];

  targetLocation!: Location;

  currentLocation!: Location;

  // CRUD functions for bet mutations
  async createBet(
    stakeInput: any,
    dateInput: any,
    descriptionInput: any,
    outcome: boolean
  ) {
    let betTimestamp!: number;
    if (outcome) {
      alert(
        'You have successfully placed your bet! Check it out in "Current Bets" for details'
      );
      betTimestamp = new Date(dateInput).getTime();
    } else {
      betTimestamp = 1;
    }
    const newBet = {
      stake: stakeInput,
      time: dateInput,
      timestamp: betTimestamp,
      coords: [this.targetLocation.latitude, this.targetLocation.longitude],
      description: descriptionInput,
      outcome: outcome,
    };
    const result = await this.api.CreateBet(newBet);
    this.allBets.push(result);
  }

  async deleteBet(bet: any) {
    const { id } = bet;
    const r = { id };
    this.api.DeleteBet(r).then((event) => {
      this.allBets = this.allBets.filter((r: any) => r.id != bet.id);
    });
  }

  async adhocUpdater(bet: any) {
    const withinRange: boolean =
      this.distanceBetweenTwoCoords(
        this.currentLocation.latitude,
        this.currentLocation.longitude,
        bet.coords[0],
        bet.coords[1]
      ) < 250;
    if (withinRange) {
      this.deleteBet(bet);
      this.createBet(bet.stake, bet.time, bet.description, false);
      alert('Bet successfully validated!');
    } else {
      alert('You need to be within 250 meters of your target!');
    }
  }

  async ListBets() {
    const result = await this.api.ListBets();
    this.allBets = result.items;
  }
}
