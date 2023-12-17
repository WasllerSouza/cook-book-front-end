export class ProdutosModel {
  private _titulo: string
  private _ingredientes: Ingredientes[];
  private _modoPreparoPreparo: string
  private _categoria: number;


  get titulo(): string {
    return this._titulo;
  }

  set titulo(value: string) {
    this._titulo = value;
  }

  get ingredientes(): Ingredientes[] {
    return this._ingredientes;
  }

  set ingredientes(value: Ingredientes[]) {
    this._ingredientes = value;
  }

  get modoPreparoPreparo(): string {
    return this._modoPreparoPreparo;
  }

  set modoPreparoPreparo(value: string) {
    this._modoPreparoPreparo = value;
  }

  get categoria(): number {
    return this._categoria;
  }

  set categoria(value: number) {
    this._categoria = value;
  }

}

export class Ingredientes {
  private _produto: string;
  private _quantidade: string;


  get produto(): string {
    return this._produto;
  }

  set produto(value: string) {
    this._produto = value;
  }

  get quantidade(): string {
    return this._quantidade;
  }

  set quantidade(value: string) {
    this._quantidade = value;
  }
}


