import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { DataModel } from '../models/data-model';
import { Data } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  apiUrl = 'https://localhost:44377/weatherforecast';           //tu podać url do backendu (chyba xD)

  downloadData(): Observable<DataModel[]> {
    return this.http
      .get<DataModel[]>(this.apiUrl);
  }
}
