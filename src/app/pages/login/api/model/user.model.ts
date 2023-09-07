export class UserModel {
  private _id: number;
  private _name: string;
  private _username: string;
  private _picture: string;
  private _password: string;

  constructor() {}

  get id(): number {
    return this._id;
  }

  set id(id: number) {
    this._id = id;
  }

  get name(): string {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }
  get username(): string {
    return this._username;
  }

  set username(username: string) {
    this._username = username;
  }
  get password(): string {
    return this._password;
  }

  set password(password: string) {
    this._password = password;
  }
  get picture(): string {
    return this._picture;
  }

  set picture(picture: string) {
    this._picture = picture;
  }
}
