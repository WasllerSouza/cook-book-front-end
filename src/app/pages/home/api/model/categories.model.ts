export class Categoria {
  id: number
  nome: string
  detalhe: string
}
export class SearchModel{
  private _search:string;
  private _filter:number;

  get search(): string {
    return this._search;
  }

  set search(value: string) {
    this._search = value;
  }

  get filter(): number {
    return this._filter;
  }

  set filter(value: number) {
    this._filter = value;
  }
}
export const categoriaArr: Categoria[] = [
  {id: 0, nome: 'cafe', detalhe: '10 minutos'},
  {id: 1, nome: 'arroz', detalhe: '20 minutos'},
  {id: 2, nome: 'bolo', detalhe: '20 minutos'},
  {id: 3, nome: 'macarrao', detalhe: '40 minutos'},
]
