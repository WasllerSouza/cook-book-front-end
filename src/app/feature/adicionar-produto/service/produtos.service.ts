import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ProdutosBaseService} from "./produtos-base.service";

@Injectable({
  providedIn: 'root'
})
export class ProdutosService implements  ProdutosBaseService{

  constructor(private http: HttpClient) {
  }

}
