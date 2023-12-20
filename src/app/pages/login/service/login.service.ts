import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {UserModel} from "../api/model/user.model";
import {LOGIN_API_ROUTES} from "../api/api.routes";
import {map, Observable} from "rxjs";
import {GenericResponse} from "../../../api/generic-response";
import {CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient, private cookieService: CookieService) {
  }

  public login(user: UserModel): Observable<GenericResponse<any>> {
    const apiUrl = LOGIN_API_ROUTES.login();
    return this.http.post<GenericResponse<any>>(apiUrl, user);
  }

  public register(user: UserModel): Observable<GenericResponse<any>> {
    const apiUrl = LOGIN_API_ROUTES.register();
    return this.http.post<GenericResponse<any>>(apiUrl, user)
  }

  public recorveryPassword(user: UserModel): Observable<GenericResponse<any>> {
    const apiUrl = LOGIN_API_ROUTES.recorveryPassword();
    return this.http.put<GenericResponse<any>>(apiUrl, user);
  }
}
