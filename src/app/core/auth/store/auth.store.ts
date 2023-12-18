import {BehaviorSubject, Observable} from "rxjs";
import {UserModel} from "../api/model/User.model";

export class AuthStore {
  private _session = new BehaviorSubject<UserModel | null>(null);

  public get session$(): Observable<UserModel> {
    return this._session.asObservable();
  }

  public set session(value: UserModel | null){
    this._session.next(value);
  }
}
