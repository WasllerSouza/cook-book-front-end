export interface Categoria {
  id: number
  nome: string
  detalhe: string
}

export const categoriaArr: Categoria[] = [
  {id: 1, nome: 'cafe', detalhe: '10 minutos'},
  {id: 2, nome: 'arroz', detalhe: '20 minutos'},
  {id: 3, nome: 'macarrao', detalhe: '40 minutos'},
]
