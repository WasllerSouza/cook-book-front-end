import {Injectable} from "@angular/core";
import {BehaviorSubject, filter, Observable, shareReplay} from "rxjs";
import {Alert} from "../models/alert.model";
import {Router} from "@angular/router";
import {TypeError} from "../../../page-component/page-error/enum/type-error.enum";
import {ConfirmDialog} from "primeng/confirmdialog";

@Injectable()
export class ErrorService {
  private _subjectMessage = new BehaviorSubject<string[]>([]);
  private _subjectAlert: BehaviorSubject<Alert> = new BehaviorSubject<Alert>({} as Alert);


  public errors$: Observable<string[]> = this._subjectMessage.asObservable().pipe(
    filter((messages: string[]): boolean => messages && messages.length > 0),
    shareReplay()
  );

  public errorsAlert$: Observable<Alert> = this._subjectAlert.asObservable().pipe(
    filter((alert: Alert): boolean => alert && alert.message && alert.message.length > 0),
    shareReplay()
  );

  constructor(private router: Router) {
  }
  public showErrors(...msgs: string[]): void {
    this._subjectMessage.next(msgs);
  }

  public showErrorsTyped(alert: Alert): void {
    this._subjectAlert.next(alert);
  }

  public redirectErrorPage(typeError: TypeError): void {
    this.router.navigate(['error/', typeError])
  }
}
