import { Component, OnDestroy, OnInit } from '@angular/core';
import { WeatherapiService } from './services/weatherapi.service';
import { Weather } from './model/Weather';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'WeatherApp';
  event: Event | undefined;
  constructor(private weatherService: WeatherapiService) {}
  weather: Weather = {};
  ngOnInit() {
    // this.weatherService.getWeather('Boston').subscribe({
    //   next: (response) => {
    //     if (response.current || this.weather) {
    //       this.weather.current = response.current;
    //       this.weather.location = response.location;
    //     }
    //     console.log(response);
    //   },
    // });
  }

  callWeather(value: string) {
    event?.preventDefault();
    console.log(value);
    //console.log(value.toLowerCase().charAt(0).toUpperCase());
    this.weatherService.getWeather(value).subscribe({
      next: (response) => {
        if (response.current || this.weather) {
          this.weather.current = response.current;
          this.weather.location = response.location;
          console.log(response);
        }
      },
    });
  }

  ngOnDestroy(): void {}
}
