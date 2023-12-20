import {Injectable, numberAttribute} from "@angular/core";
import {ProdutosStore} from "../store/produtos.store";
import {ProdutosBaseService} from "../service/produtos-base.service";
import {ProdutosService} from "../service/produtos.service";
import {Ingredientes, ProdutosModel} from "../api/model/Produtos.model";
import {catchError, tap, throwError} from "rxjs";
import {GenericResponse} from "../../../api/generic-response";
import {ErrorService} from "../../../shared/componentes/alerta/services/error.service";
import {Router} from "@angular/router";
import {ReceitaService} from "../../receita/service/receita.service";
import {SearchModel} from "../../receita/api/model/categories.model";


@Injectable()
export class ProdutosFacade {


  constructor(private store: ProdutosStore,
              private service: ProdutosBaseService,
              private produtoService: ProdutosService,
              private _errorService: ErrorService,
              private router: Router,) {
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
    this.store.loading = true;
    setTimeout(() => this.store.loading = false, 1000)

  }

  public adicionarIngrediente() {
    this.store.state.ingrediente = Object.assign({}, this.store.state.ingrediente, this.store.state.ingredientesForm.value);
    this.store.state.ingredientes.push(this.store.state.ingrediente);
  }

  public removerIngrediente() {
    this.store.state.ingredientes.pop()
  }

  clearForm() {
    this.store.state.ingredientesForm.reset({
      produto: '',
      quantidade: '',
    });
    this.store.state.stepsForm.reset({
      titulo: '',
      ingredientes: '',
      modoPreparo: '',
    });
    this.store.state.searchForm.reset({
      titulo: '',
      ingredientes: '',
      modoPreparo: '',
    });
    this.store.state.ingredientes = [];
    this.store.items.length = 0
    this.store.state.activeIndex = 0;
  }

  public postProdutos() {
    this.store.produtos$.subscribe(res => res.stepsForm.get('ingredientes').setValue(this.store.state.ingredientes))
    this.store.produtos$.subscribe(res =>
      res.stepsForm.get('categoria').setValue((this.store.state.categoriaForm.get('categoria').value.key)));
    this.store.state.produtos = Object.assign({}, this.store.state.produtos, this.store.state.stepsForm.value);
    if (this.store.state.stepsForm.valid) {
      this.produtoService.postProdutos(this.store.state.produtos).pipe(
        tap(() => {
          this._errorService.showErrors('Enviado com sucesso!')
          this.clearForm();
          this.router.navigateByUrl('/home');

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
