import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { APIService, Bet } from '../app/API.service';
import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { Amplify } from '@aws-amplify/core'
import Auth from '@aws-amplify/auth'
import { DatePipe } from '@angular/common';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


}