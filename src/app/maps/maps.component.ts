import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Location } from '../location';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})

export class MapsComponent implements OnInit {

  @Output() sender = new EventEmitter();
  
  //Assign marker icon, targetLocation, and currentLocation to current co-ordinates
  constructor(){
    if (navigator)
    {
    navigator.geolocation.getCurrentPosition( pos => {
      this.markers[0].lat = this.targetLocation.latitude = this.currentLocation.latitude = +pos.coords.latitude;
      this.markers[0].lng = this.targetLocation.longitude = this.currentLocation.longitude = +pos.coords.longitude;
      //this.markers[0].lat = +pos.coords.latitude;
      //this.markers[0].lng = +pos.coords.longitude;
      });
    }
  }

  //Send location data to bets component
  ngOnInit(): void {
    this.sender.emit(this.targetAndCurrent);
  }

  //create location objects
  targetLocation = {} as Location; 
  currentLocation = {} as Location;
  targetAndCurrent = {
    target: this.targetLocation,
    current: this.currentLocation
  }
  
  //calibrate map and marker
  zoom: number = 15;
  lastInfoWindow: any;
  markers: any[] = [
    {
      lat: this.currentLocation.latitude,
      lng: this.currentLocation.longitude,
      label: { color: 'white', text: 'P3' },
      draggable: true
    }
  ]

  //Marker event functions
  markerClicked(marker: any, index: number, infoWindowRef: any) {
    if (this.lastInfoWindow) {
      this.lastInfoWindow.close();
    }
    this.lastInfoWindow = infoWindowRef;
    console.log(marker, index);
  }

  mapClicked($event: any) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    });
  }

  markerDragEnd($event: any, index: number) {
    this.targetLocation.latitude = $event.coords.lat; 
    this.targetLocation.longitude = $event.coords.lng;
    console.log($event.coords.lat, $event.coords.lng);
    //console.log($event.coords.lng);
  }
} 


