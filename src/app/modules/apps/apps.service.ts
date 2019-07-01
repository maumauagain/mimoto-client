import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppsService {
  protected url = 'https://localhost:20000/api/Apps';

  constructor(private http: HttpClient) {}

  public get apps(): Observable<any> {
    return this.http.get(this.url);
  }
}
