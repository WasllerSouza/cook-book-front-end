import {Injectable} from '@angular/core';

import {GenericResponse} from "../../../api/generic-response";
import {HOME_API_ROUTES} from "../api/api.routes";
import {HttpClient} from "@angular/common/http";
import {Categoria, categoriaArr} from "../api/model/categories.model";

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {
  home: Categoria[] = categoriaArr

  constructor(private http: HttpClient) {
  }

  findById(id: number) {
    // const apiUrl = HOME_API_ROUTES.getCategories(id);
    // return this.http.get<GenericResponse<any>>(apiUrl);
    return this.home.find(home => home.id === id)
  }

  getAll() {
    return this.home
  }
}
