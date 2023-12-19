import {Injectable} from '@angular/core';

import {GenericResponse} from "../../../api/generic-response";
import {HOME_API_ROUTES} from "../api/api.routes";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Categoria, categoriaArr, SearchModel} from "../api/model/categories.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {
  home: Categoria[] = categoriaArr

  constructor(private http: HttpClient) {
  }

  findById(id: number): Observable<any> {
    const apiUrl = HOME_API_ROUTES.getById();
    return this.http.get<any>(apiUrl, {params: new HttpParams().append('id', id)})
  }

  getAll(id: number): Observable<any> {
    const apiUrl = HOME_API_ROUTES.getAll();
    return this.http.get<any>(apiUrl, {params: new HttpParams().append('id', id)});
  }

  searchProducts(search: SearchModel): Observable<GenericResponse<any>> {
    const apiUrl = HOME_API_ROUTES.searchProduct();
    return this.http.post<GenericResponse<any>>(apiUrl, search);
  }

}
