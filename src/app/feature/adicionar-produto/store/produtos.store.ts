import {inject, Injectable} from "@angular/core";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {BehaviorSubject} from "rxjs";
import {MenuItem} from "primeng/api";

export class ProdutosState {
  stepsForm: FormGroup;
  items: MenuItem[];
  activeIndex: number = 0;
  loading: boolean;
  ingredientes: string[];
  categories: any[]

}

@Injectable()
export class ProdutosStore {
  private fb = inject(FormBuilder);
  private produtosSubject: BehaviorSubject<ProdutosState> = new BehaviorSubject<ProdutosState>({
    stepsForm: this.fb.group({
      nomeReceita: ['', Validators.required],
      categoriaReceita: ['', Validators.required],
      ingredientesReceita: ['', Validators.required],
      modoDePreparoReceita: ['', Validators.required],
    }),
    items: [],
    activeIndex: 0,
    loading: false,
    ingredientes: [],
    categories: [
      {name: 'Accounting', key: 'A'},
      {name: 'Marketing', key: 'M'},
      {name: 'Production', key: 'P'},
      {name: 'Research', key: 'R'}
    ]
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
