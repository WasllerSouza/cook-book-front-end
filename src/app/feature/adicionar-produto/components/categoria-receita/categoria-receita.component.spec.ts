import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaReceitaComponent } from './categoria-receita.component';

describe('CategoriaReceitaComponent', () => {
  let component: CategoriaReceitaComponent;
  let fixture: ComponentFixture<CategoriaReceitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriaReceitaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaReceitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
