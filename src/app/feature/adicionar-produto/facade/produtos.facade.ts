import {Injectable} from "@angular/core";
import {ProdutosStore} from "../store/produtos.store";
import {ProdutosBaseService} from "../service/produtos-base.service";
import {resolve} from "@angular/compiler-cli";
import {ProdutosService} from "../service/produtos.service";
import {ProdutosModel} from "../api/model/Produtos.model";
import {Observable} from "rxjs";
import {GenericResponse} from "../../../api/generic-response";

@Injectable()
export class ProdutosFacade {

  constructor(private store: ProdutosStore, private service: ProdutosBaseService, private produtoService:ProdutosService) {
  }

  public initComponent(): void{
    this.store.items = [
      {
        label: 'Nome da receita',
      },
      {
        label: 'Categoria da receita',
      },
      {
        label: 'Ingredientes',
      },
      {
        label: 'Modo de preparo',
      }
    ];
  }

  onDowngradeIndex() {
    if (this.store.activeIndex > -1)
      this.store.activeIndex--;
  }

  onUpdateIndexOrSave() {
    if (this.store.activeIndex < this.store.items.length -1)
      this.store.activeIndex++;
    else if(this.store.activeIndex === this.store.items.length)
      this.salvarReceita();
  }

  salvarReceita(){
    console.log('salvando...');
    this.store.loading = true;
    setTimeout(() => this.store.loading = false, 1000)
  }

  public adicionarIngrediente(n: string) {
    this.store.produtos$.subscribe(value => {
      value.ingredientes.push(n);
      console.log(value.ingredientes)
    })
  }
  public removerIngrediente(){
    this.store.produtos$.subscribe(value  =>{
      value.ingredientes.pop();
    })
  }

  public getProdutos(){
    this.produtoService.getProdutos();
  }
  public postProdutos(value:ProdutosModel){
    this.produtoService.postProdutos(value).subscribe(res=>{

    });
  }
  public putProdutos(value:ProdutosModel){
    this.produtoService.putProdutos(value).subscribe(res=>{

    });
  }
  public deleteProdutos(id:number){
    this.produtoService.deleteProdutos(id).subscribe(res=>{

    });
  }

}
