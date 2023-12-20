import {inject, Injectable} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {BehaviorSubject} from "rxjs";
import {UserModel} from "../api/model/user.model";


export class UserState {
  RecorveryForm: FormGroup;
  RegisterForm: FormGroup;
  LoginForm: FormGroup;
  checked: boolean;
  user: UserModel;
}

@Injectable()
export class UserStore {
  private fb = inject(FormBuilder);
  private userSubject: BehaviorSubject<UserState> = new BehaviorSubject<UserState>({
    LoginForm: this.fb.group({
      email: ['', Validators.required],
      senha: ['', Validators.required],
      checked: [''],

    }),
    RegisterForm:this.fb.group({
      nome: ['', Validators.required],
      email: ['', Validators.required],
      senha: ['', Validators.compose([Validators.required,Validators.minLength(6)])],
      telefone: ['', Validators.required],
    }),
    RecorveryForm:this.fb.group({
      senhaAtual: ['', Validators.required],
      novaSenha: ['', Validators.required]
    }),

    checked: false,
    user: new UserModel()

  });

  public get user$() {
    return this.userSubject.asObservable();
  }

  public get state() {
    return this.userSubject.value;
  }

  public get check() {
    return this.state.checked
  }

}
