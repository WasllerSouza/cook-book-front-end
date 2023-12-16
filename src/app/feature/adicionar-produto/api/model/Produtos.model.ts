export class ProdutosModel {
  private _titulo: string
  private _ingrediente: string;
  private _Preparo: string

  get titulo(): string {
    return this._titulo;
  }

  set titulo(value: string) {
    this._titulo = value;
  }

  get ingrediente(): string {
    return this._ingrediente;
  }

  set ingrediente(value: string) {
    this._ingrediente = value;
  }

  get Preparo(): string {
    return this._Preparo;
  }

  set Preparo(value: string) {
    this._Preparo = value;
  }
}


