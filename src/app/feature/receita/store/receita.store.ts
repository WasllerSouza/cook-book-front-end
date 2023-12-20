import {inject, Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";
import {GenericResponse} from "../../../api/generic-response";
import {SearchModel} from "../api/model/categories.model";
import {DashBoardResponse} from "../api/model/response/dash-board.response";
import {CategoriaEnum} from "../../adicionar-produto/api/enum/categoria.enum";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ReceitaResponse} from "../api/model/response/receita.response";

export class ReceitaState {
  dashBoard$: Observable<GenericResponse<DashBoardResponse[]>>;
  receita$: Observable<ReceitaResponse>;
  searchModel: SearchModel;
  cafeDaManha: CategoriaEnum;
  almoco: CategoriaEnum;
  sobremesa: CategoriaEnum;
  jantar: CategoriaEnum;

  searchForm: FormGroup
}

@Injectable()
export class ReceitaStore {
  private fb = inject(FormBuilder);
  private receitaSubject: BehaviorSubject<ReceitaState> = new BehaviorSubject<ReceitaState>({
    dashBoard$: null,
    receita$: null,
    searchModel: new SearchModel(),
    cafeDaManha: CategoriaEnum.CAFE_DA_MANHA,
    almoco: CategoriaEnum.ALMOCO,
    sobremesa: CategoriaEnum.SOBREMESA,
    jantar: CategoriaEnum.JANTAR,
    searchForm: this.fb.group({
      search: ['']
    })
  });


  public get state() {
    return this.receitaSubject.value;
  }

  public get state$() {
    return this.receitaSubject.asObservable();
  }

  public get dashBoard$() {
    return this.state.dashBoard$;
  }

  public set dashBoard$(value: Observable<GenericResponse<DashBoardResponse[]>>) {
    const current = this.state;
    this.receitaSubject.next({...current, dashBoard$: value});
  }

  public get receita$() {
    return this.state.receita$;
  }

  public set receita$(value: Observable<ReceitaResponse>) {
    const current = this.state;
    this.receitaSubject.next({...current, receita$: value});
  }

  public get searchModel() {
    return this.state.searchModel;
  }

  public set searchModel(value: SearchModel) {
    const current = this.state;
    this.receitaSubject.next({...current, searchModel: value});
  }

  public get searchForm() {
    return this.state.searchForm;
  }

  public get cafeDaManha() {
    return this.state.cafeDaManha;
  }

  public get almoco() {
    return this.state.almoco;
  }

  public get sobremesa() {
    return this.state.sobremesa;
  }

  public get jantar() {
    return this.state.jantar;
  }

}
