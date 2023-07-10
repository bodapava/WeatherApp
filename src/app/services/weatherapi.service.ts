import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Weather } from '../model/Weather';

@Injectable({
  providedIn: 'root',
})
export class WeatherapiService {
  constructor(private http: HttpClient) {}

  getWeather(cityName: string): Observable<Weather> {
    return this.http.get<Weather>(environment.weatherAPIBaseURL, {
      headers: new HttpHeaders()
        .set(environment.XRapidAPIHostHeader, environment.XRapidAPIHostValue)
        .set(environment.XRapidAPIKeyHeader, environment.XRapidAPIKeyValue),
      params: new HttpParams().set('q', cityName),
    });
  }
}
