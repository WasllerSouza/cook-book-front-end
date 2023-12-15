import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NomeReceitaComponent } from './nome-receita.component';

describe('NomeReceitaComponent', () => {
  let component: NomeReceitaComponent;
  let fixture: ComponentFixture<NomeReceitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NomeReceitaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NomeReceitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
