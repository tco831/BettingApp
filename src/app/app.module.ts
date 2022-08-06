import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCommonModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { AgmCoreModule } from '@agm/core';
import { MapsComponent } from './maps/maps.component';
import { ExplainerComponent } from './explainer/explainer.component';
import { Routes, RouterModule } from '@angular/router';
import { BetsComponent } from './bets/bets.component';
import { DatePipe } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSliderModule } from '@angular/material/slider';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
//import { DateInputComponent } from './date-input/date-input.component';
//import { StakeInputComponent } from './stake-input/stake-input.component';
//import { TimeInputComponent } from './time-input/time-input.component';
import { MatCardModule } from '@angular/material/card';
import { NgxMatDatetimePickerModule, NgxMatTimepickerModule } from '@angular-material-components/datetime-picker';
import { AlertComponent } from './alert/alert.component';

const appRoute: Routes = [
  {path: 'explainer', component: ExplainerComponent},
  {path: 'bets', component: BetsComponent},
  {path: '', component: BetsComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    MapsComponent,
    ExplainerComponent,
    BetsComponent,
    AlertComponent,
    //DateInputComponent,
    //StakeInputComponent,
    //TimeInputComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    /* configure App with AmplifyAuthenticatorModule */
    AmplifyAuthenticatorModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatCommonModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyASlCvrB0oQ8xK111WO80WcG7DGcUwSClA'
    }),
    RouterModule.forRoot(appRoute),
    MatDialogModule,
    MatSliderModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatInputModule,
    NgxMatTimepickerModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMatDatetimePickerModule,
    ],
  providers: [
    DatePipe,
    MatDatepickerModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
