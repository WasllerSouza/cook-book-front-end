import {Injectable} from "@angular/core";
import {debounceTime, distinctUntilChanged, map, Observable, of, startWith, switchMap, tap} from "rxjs";
import {GenericResponse} from "../../../api/generic-response";
import {ErrorService} from "../../../shared/componentes/alerta/services/error.service";
import {Router} from "@angular/router";
import {ReceitaService} from "../../receita/service/receita.service";
import {SearchModel} from "../../receita/api/model/categories.model";
import {ReceitaStore} from "../store/receita.store";
import {DashBoardResponse} from "../api/model/response/dash-board.response";


@Injectable()
export class ReceitaFacade {


  constructor(private store: ReceitaStore,
              private service: ReceitaService,
              private router: Router,
              private _errorService: ErrorService
  ) {
  }


  listenToSearchChanges(search$: Observable<string>): void {
    search$.pipe(
      distinctUntilChanged(),
      debounceTime(300),
      switchMap(search => {
        this.store.searchModel = {
          search: search.search.toString(),
          filter: this.store.searchModel.filter
        } as SearchModel;
        return this.service.searchProducts(this.store.searchModel)
      })
    ).subscribe(dashBoard => this.store.dashBoard$ = of(dashBoard));
  }

  getInitialSearch(): void {
    this.store.dashBoard$ = this.service.searchProducts(new SearchModel());
  }

  public filtrar(value: number) {
    this.store.searchModel = {
      search: this.store.searchModel.search,
      filter: value
    } as SearchModel;
    this.store.dashBoard$ = this.service.searchProducts(this.store.searchModel);
  }

  findById(id: string) {
    this.store.receita$ = this.service.findById(id).pipe(map(generic => generic.data));
  }

}
