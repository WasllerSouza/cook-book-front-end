import {Component, OnInit} from '@angular/core';
import {ErrorService} from "./shared/componentes/alerta/services/error.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(private errorService: ErrorService) {
  }
  ngOnInit(): void {
    }

}
