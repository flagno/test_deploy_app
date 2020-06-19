import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'gmap-example';
  lat: any = -12.071578184003744
  lng: any = -77.09126805586618

  lat2: any = -12.17007211890795
  lng2: any = -76.968102228465

  origin: any
  destination: any
  public waypoints: object[]

  constructor() {
    this.origin = { lat: this.lat, lng: this.lng }
    this.destination = { lat: this.lat2, lng: this.lng2 }
    this.waypoints = [
      {
        location: { lat: -12.11605098415143, lng: -77.00992788195305 },
        stopover: true
      }
    ]
  }

  onChoseLocation(event) {
    console.log(this.waypoints)
    this.waypoints.push({
      location: { lat: event.coords.lat, lng: event.coords.lng },
      stopover: true
    })
    this.destination = this.destination = { lat: this.lat2, lng: this.lng2 }

    // let current = { lat: this.lat, lng: this.lng }
    // let result = { lat: event.coords.lat, lng: event.coords.lng };
    // this.animatedMove(.5, current, result);
    // this.lat2 = result.lat
    // this.lng2 = result.lng
  }

  animatedMove(t, current, moveto) {
    let deltalat = (moveto.lat - current.lat) / 100;
    let deltalng = (moveto.lng - current.lng) / 100;
    console.log(current, moveto)
    let delay = 10 * t;
    for (let i = 0; i < 100; i++) {
      // ((ind) => {
      setTimeout(
        () => {
          this.lat += +deltalat;
          this.lng += +deltalng;
          // }, delay * ind
        }, delay * i
      );
      // })(i)
    }
    console.log(this.lat, this.lng)
  }
}