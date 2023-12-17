import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ProdutosBaseService} from "./produtos-base.service";
import {environment} from "../../../../environments/environment";
import {Observable} from "rxjs";
import {ProdutosModel} from "../api/model/Produtos.model";
import {GenericResponse} from "../../../api/generic-response";
import {PRODUTOS_API_ROUTES} from "../api/api.routes";

@Injectable({
  providedIn: 'root'
})
export class ProdutosService implements ProdutosBaseService {
  constructor(private http: HttpClient) {
  }

  public getProdutos(): Observable<GenericResponse<any>> {
    const apiUrl = PRODUTOS_API_ROUTES.getProdutos()
    return this.http.get<GenericResponse<any>>(apiUrl);
  }

  public postProdutos(produtos: ProdutosModel): Observable<GenericResponse<any>> {
    const apiUrl = PRODUTOS_API_ROUTES.postProdutos()
    return this.http.post<GenericResponse<any>>(apiUrl, produtos)
  }

  public putProdutos(produtos: ProdutosModel): Observable<GenericResponse<any>> {
    const apiUrl = PRODUTOS_API_ROUTES.putProdutos()
    return this.http.put<GenericResponse<any>>(apiUrl, produtos)

  }

  public deleteProdutos(id: number): Observable<GenericResponse<any>> {
    const apiUrl = PRODUTOS_API_ROUTES.deleteProdutos(id)
    return this.http.delete<GenericResponse<any>>(apiUrl)
  }


}
