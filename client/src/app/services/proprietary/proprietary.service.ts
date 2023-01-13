import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hotel } from 'src/models/hotel.model';

@Injectable({
  providedIn: 'root'
})
export class ProprietaryService {

  apiUrl='http://localhost:8080/youbooking/proprietary'
  constructor(private http: HttpClient) { }
  public getHotels(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(`${this.apiUrl+'/get-my-hotel'}`);
  }
}
