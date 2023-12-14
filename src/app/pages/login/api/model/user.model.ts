export class UserModel {

  private _email: string;
  private _senha: string;

  constructor() {}


  get email(): string {
    return this._email;
  }

  set nome(value: string) {
    this._email = value;
  }

  get senha(): string {
    return this._senha;
  }

  set senha(value: string) {
    this._senha = value;
  }
}
