import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  public apiUrl = environment.apiURL;
  public API = environment.apiKey;
  public CORS = environment.corsProxy;

  constructor(private http: HttpClient) { }

  updateRow(firstName: string, age: string): Observable<any> {
    return this.http.post(this.API + '/updateRow', { firstName: firstName, age: age }, {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
      responseType: 'text'
    });
  }

  getAll(): Observable<any> {
    return this.http.get(this.apiUrl + '/cars');
  }

  getParse(characterName: string): Observable<any> {
    // const headers = new HttpHeaders({
    //   'Access-Control-Allow-Origin': '*'
    // });
    const headers = new HttpHeaders({
      'X-Requested-With': 'XMLHttpRequest'
    });
    return this.http.get(this.CORS + this.apiUrl + 'parses/character/' + characterName + '/Heartseeker/US?api_key=' 
      + this.API, {headers: headers});
  }

  getZones(): Observable<any> {
    const headers = new HttpHeaders({
      'X-Requested-With': 'XMLHttpRequest'
    });
    return this.http.get(this.CORS + this.apiUrl + 'zones?api_key=' + this.API, {headers: headers});
  }


}
