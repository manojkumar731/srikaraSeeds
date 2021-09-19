import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Url } from '../../url';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  authUrl = Url.BaseUrl + Url.Auth;

  constructor(private httpClient: HttpClient) { }


  login(data: any): Observable<any> {
    return this.httpClient.post(this.authUrl, data);
  }

}
