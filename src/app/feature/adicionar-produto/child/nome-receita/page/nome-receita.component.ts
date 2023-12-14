import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ErrorService} from "../../../../../shared/componentes/alerta/services/error.service";

@Component({
  selector: 'app-nome-receita',
  templateUrl: './nome-receita.component.html',
  styleUrls: ['./nome-receita.component.scss']
})
export class NomeReceitaComponent implements OnInit {
  public registerForm: FormGroup;

  constructor(private _router: Router, private _fb: FormBuilder,
              private _errorService: ErrorService) {

  }

  ngOnInit(): void {
    this.registerForm = this._fb.group({
      name: ['', Validators.required],
    });
  }



}
