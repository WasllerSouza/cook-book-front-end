import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {UserModel} from "../api/model/user.model";
import {LOGIN_API_ROUTES} from "../api/api.routes";
import {Observable} from "rxjs";
import {GenericResponse} from "../../../api/generic-response";

@Injectable({
  providedIn: 'root'
})
export class LoginService{
  constructor(private http: HttpClient) {
  }

  public login(user: UserModel): Observable<GenericResponse<any>>{
    const apiUrl = LOGIN_API_ROUTES.login();
    return this.http.post<GenericResponse<any>>(apiUrl, user);
  }
}
