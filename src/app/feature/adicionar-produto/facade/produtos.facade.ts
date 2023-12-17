import {Injectable, numberAttribute} from "@angular/core";
import {ProdutosStore} from "../store/produtos.store";
import {ProdutosBaseService} from "../service/produtos-base.service";
import {ProdutosService} from "../service/produtos.service";
import {Ingredientes, ProdutosModel} from "../api/model/Produtos.model";
import {catchError, tap, throwError} from "rxjs";
import {GenericResponse} from "../../../api/generic-response";
import {ErrorService} from "../../../shared/componentes/alerta/services/error.service";


@Injectable()
export class ProdutosFacade {
  ingrediente: Ingredientes;
  produtos: ProdutosModel;

  constructor(private store: ProdutosStore, private service: ProdutosBaseService, private produtoService: ProdutosService, private _errorService: ErrorService) {
  }

  public initComponent(): void {
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
    if (this.store.activeIndex < this.store.items.length - 1)
      this.store.activeIndex++;
    else if (this.store.activeIndex === this.store.items.length - 1)
      this.salvarReceita();

  }

  salvarReceita() {
    this.postProdutos();
    console.log(this.produtos)
    console.log('salvando...');
    this.store.loading = true;
    setTimeout(() => this.store.loading = false, 1000)

  }

  public adicionarIngrediente() {
    this.ingrediente = Object.assign({}, this.ingrediente, this.store.state.ingredientesForm.value);
    this.store.state.ingredientes.push(this.ingrediente);
  }

  public removerIngrediente() {
    this.store.state.ingredientes.pop()
  }

  public getProdutos() {
    this.produtoService.getProdutos();
  }

  public postProdutos() {
    this.store.produtos$.subscribe(res => res.stepsForm.get('ingredientes').setValue(this.store.state.ingredientes))
    this.store.produtos$.subscribe(res =>
      res.stepsForm.get('categoria').setValue((numberAttribute(this.store.state.stepsForm.get('categoria').value.key))))
    this.produtos = Object.assign({}, this.produtos, this.store.state.stepsForm.value);
    if (this.store.state.stepsForm.valid) {
      this.produtoService.postProdutos(this.produtos).pipe(
        tap(() => {
          this._errorService.showErrors('Enviado com sucesso!')
        }), catchError((err: GenericResponse<any>) => {
          this._errorService.showErrorsTyped({
            messageType: 'error',
            message: err.errors
          })
          return throwError(err);
        })
      ).subscribe();
    }
  }

  public putProdutos(value: ProdutosModel) {
    this.produtoService.putProdutos(value).subscribe(res => {

    });
  }

  public deleteProdutos(id: number) {
    this.produtoService.deleteProdutos(id).subscribe(res => {

    });
  }

}
