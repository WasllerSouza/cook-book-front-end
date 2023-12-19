import {inject, Injectable} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {BehaviorSubject} from "rxjs";
import {MenuItem} from "primeng/api";
import {Ingredientes, ProdutosModel} from "../api/model/Produtos.model";
import {CategoriaEnum} from "../api/enum/categoria.enum";

export class ProdutosState {
  stepsForm: FormGroup;
  ingredientesForm: FormGroup;
  categoriaForm: FormGroup;
  items: MenuItem[];
  activeIndex: number = 0;
  loading: boolean;
  ingredientes: Ingredientes[];
  categories: any[]
  ingrediente: Ingredientes;
  produtos: ProdutosModel;

}

@Injectable()
export class ProdutosStore {
  private fb = inject(FormBuilder);
  private produtosSubject: BehaviorSubject<ProdutosState> = new BehaviorSubject<ProdutosState>({
    stepsForm: this.fb.group({
      titulo: ['', Validators.required],
      categoria: ['', Validators.required],
      ingredientes: ['', Validators.required],
      modoPreparo: ['', Validators.required],
    }),
    categoriaForm: this.fb.group({
      categoria: ['', Validators.required],
    }),
    ingredientesForm: this.fb.group({
      produto: ['', Validators.required],
      quantidade: ['', Validators.required]
    }),

    items: [],
    activeIndex: 0,
    loading: false,
    ingredientes: [],
    categories: [
      {name: 'café da manhã', key: CategoriaEnum.CAFE_DA_MANHA},
      {name: 'Almoço', key: CategoriaEnum.ALMOCO},
      {name: 'Sobremesa', key: CategoriaEnum.SOBREMESA},
      {name: 'jantar', key: CategoriaEnum.JANTAR},
    ],
    ingrediente: new Ingredientes(),
    produtos: new ProdutosModel()

  });


  public get state() {
    return this.produtosSubject.value;
  }

  public get produtos$() {
    return this.produtosSubject.asObservable();
  }

  public get items() {
    return this.state.items;
  }

  public set items(items: MenuItem[]) {
    const currentState = this.state;
    this.produtosSubject.next({...currentState, items: items});
  }

  public get activeIndex() {
    return this.state.activeIndex;
  }

  public set activeIndex(activeIndex: number) {
    const currentState = this.state;
    this.produtosSubject.next({...currentState, activeIndex: activeIndex});
  }

  public get loading() {
    return this.state.loading;
  }

  public set loading(loading: boolean) {
    const currentState = this.state;
    this.produtosSubject.next({...currentState, loading: loading});
  }

}
