export class UserModel {

  private _email: string;
  private _senha: string;
  private _nome: string;
  private _telefone:string;
  private _senhaAtual:string;
  private _novaSenha:string;


  constructor() {}


  get senhaAtual(): string {
    return this._senhaAtual;
  }

  set senhaAtual(value: string) {
    this._senhaAtual = value;
  }

  get novaSenha(): string {
    return this._novaSenha;
  }

  set novaSenha(value: string) {
    this._novaSenha = value;
  }

  get email(): string {
    return this._email;
  }

  set nome(value: string) {
    this._email = value;
  }


  get nome(): string {
    return this._nome;
  }

  get senha(): string {
    return this._senha;
  }

  set senha(value: string) {
    this._senha = value;
  }


  get telefone(): string {
    return this._telefone;
  }

  set telefone(value: string) {
    this._telefone = value;
  }
}
