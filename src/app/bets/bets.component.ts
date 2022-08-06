import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { APIService, Bet } from '/Users/Turlough/frinight/src/app/API.service'
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

  constructor(private api:APIService) {}

  currentTimestamp = Date.now();
  allBets:any[] = [];
  //can this be changed...
  targetLocation!:Location;
  currentLocation!:Location;

  mapsDataImport(event: any) {
    this.targetLocation = event.target;
    this.currentLocation = event.current;
  } 

  async ngOnInit() {
    let result = await this.api.ListBets();
    this.allBets = result.items;
  }


/*   dateValidator(c: FormControl) {
    const today = new Date();
    if(c.value > today) {
        return null;
    } else {
        return {dateValidator: {valid: false}};
    }
  } */

  stakeValidator() {
    //number between 1 and 1000
  }

  descriptionValidator(){
    //make sure string is
  }

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

  // generally used geo measurement function
  distanceBetweenTwoCoords(lat1:number, lon1:number, lat2:number, lon2:number){  
    var R = 6378.137; // Radius of earth in KM
    var dLat = lat2 * Math.PI / 180 - lat1 * Math.PI / 180;
    var dLon = lon2 * Math.PI / 180 - lon1 * Math.PI / 180;
    var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon/2) * Math.sin(dLon/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c;
    return d * 1000; // meters
  }

  adhocUpdater(bet:any) {
    if (this.distanceBetweenTwoCoords(this.currentLocation.latitude, this.currentLocation.longitude, bet.coords[0], bet.coords[1]) < 250) {
      this.deleteBet(bet);
      let stake = bet.stake;
      let time = bet.time;
      let description = bet.description;
      this.createBet(stake, time, description, false);
    } else {
      console.log("you need to be closer")
    }
  }

  async ListBets() {
    let result = await this.api.ListBets();
    this.allBets = result.items;
  }
}
