import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { APIService, Bet } from '/Users/Turlough/frinight/src/app/API.service'
import { APIService, Bet } from '../API.service'
import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { Amplify } from '@aws-amplify/core'
import Auth from '@aws-amplify/auth'
import { DatePipe } from '@angular/common';
//import { MatDialog } from '@angular/material';
import { Location } from '../location';

@Component({
  selector: 'app-bets',
  templateUrl: './bets.component.html',
  styleUrls: ['./bets.component.scss']
})
export class BetsComponent implements OnInit {

  loginUser(item:any) {
    console.warn(item);
  }

  constructor(private api:APIService) {}

  async ngOnInit() {
    let result = await this.api.ListBets();
    this.allBets = result.items;
  }

  //Obtain Geo data from maps component
  mapsDataImport(event: any) {
    this.targetLocation = event.target;
    this.currentLocation = event.current;
  } 

  // generally used geo measurement function
  distanceBetweenTwoCoords(lat1:number, lon1:number, lat2:number, lon2:number){  
    let R = 6378.137; // Radius of earth in KM
    let dLat = lat2 * Math.PI / 180 - lat1 * Math.PI / 180;
    let dLon = lon2 * Math.PI / 180 - lon1 * Math.PI / 180;
    let a = Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon/2) * Math.sin(dLon/2);
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    let d = R * c;
    return d * 1000; // meters
  }

  //Data for bet mutations
  currentTimestamp = Date.now();
  allBets:any[] = [];
  targetLocation!:Location;
  currentLocation!:Location;

  //CRUD functions
  async createBet(stakeInput:any, dateInput:any, descriptionInput:any, outcome:boolean) {
    let betTimestamp!: number;
    betTimestamp = outcome ? new Date(dateInput).getTime() : 1;
    const newBet = {
      stake: stakeInput,
      time: dateInput,
      timestamp: betTimestamp,
      coords: [this.targetLocation.latitude, this.targetLocation.longitude],
      description: descriptionInput,
      outcome: outcome
    }
    let result = await this.api.CreateBet(newBet);
    this.allBets.push(result)
  }

  async deleteBet(bet:any) {
    const {id} = bet;
    const r = {id};
    this.api.DeleteBet(r).then(event => {
      this.allBets = this.allBets.filter((r:any) => r.id != bet.id)
    })  
  }

  async adhocUpdater(bet:any) {
    let withinRange:boolean = this.distanceBetweenTwoCoords(this.currentLocation.latitude, this.currentLocation.longitude, bet.coords[0], bet.coords[1]) < 250;
    if (withinRange) {
      this.deleteBet(bet);
      this.createBet(bet.stake, bet.time, bet.description, false);
      alert("Bet successfully validated!")
    } else {
      alert("You need to be within 250 meters of your target!")
    }
  }

  async ListBets() {
    let result = await this.api.ListBets();
    this.allBets = result.items;
  }

  //Input validators
   dateValidator() {
/*     const today = new Date();
    if(c.value > today) {
        return null;
    } else {
        return {dateValidator: {valid: false}};
    } */
  } 

  stakeValidator() {
    //number between 1 and 1000
  }

  descriptionValidator(){
    //make sure string between length 1 and 30 is input
  }

  CoordsValidator() {
    //make sure coords entered via map icon
  }

}
