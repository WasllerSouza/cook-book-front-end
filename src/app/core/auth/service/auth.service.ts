import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AUTH_URL} from "../api/api.helper";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  public validate(): Observable<boolean> {
    const path = AUTH_URL.validateToken();
    return this.http.get<boolean>(path);
  }


}
