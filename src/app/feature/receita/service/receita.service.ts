import {Injectable} from '@angular/core';

import {GenericResponse} from "../../../api/generic-response";
import {HOME_API_ROUTES} from "../api/api.routes";
import {HttpClient, HttpParams} from "@angular/common/http";
import {SearchModel} from "../api/model/categories.model";
import {Observable} from "rxjs";
import {DashBoardResponse} from "../api/model/response/dash-board.response";
import {ReceitaResponse} from "../api/model/response/receita.response";

@Injectable({
  providedIn: 'root'
})
export class ReceitaService {
  constructor(private http: HttpClient) {
  }

  findById(id: string): Observable<GenericResponse<ReceitaResponse>> {
    const apiUrl = HOME_API_ROUTES.getById();
    return this.http.get<GenericResponse<ReceitaResponse>>(apiUrl, {params: new HttpParams().append('Id', id)})
  }

  searchProducts(search: SearchModel): Observable<GenericResponse<DashBoardResponse[]>> {
    const apiUrl = HOME_API_ROUTES.searchProduct();
    return this.http.post<GenericResponse<DashBoardResponse[]>>(apiUrl, search);
  }

}
