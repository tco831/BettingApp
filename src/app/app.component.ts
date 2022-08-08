import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { APIService, Bet } from '../app/API.service';
import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { Amplify } from '@aws-amplify/core'
import Auth from '@aws-amplify/auth'
import { DatePipe } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';
import { onAuthUIStateChange, CognitoUserInterface, AuthState } from '@aws-amplify/ui-components';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'workfall-amplify-app';
  user: CognitoUserInterface | undefined;
  authState!: AuthState;

  constructor(private ref: ChangeDetectorRef) { }

  ngOnInit(): void {
    onAuthUIStateChange((authState, authData) => {
      this.authState = authState;
      this.user = authData as CognitoUserInterface;
      this.ref.detectChanges();
    })
  }

  ngOnDestroy() {
    return onAuthUIStateChange;
  }

}