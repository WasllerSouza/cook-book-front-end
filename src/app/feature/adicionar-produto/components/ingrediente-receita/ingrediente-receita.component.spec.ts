import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredienteReceitaComponent } from './ingrediente-receita.component';

describe('IngredienteReceitaComponent', () => {
  let component: IngredienteReceitaComponent;
  let fixture: ComponentFixture<IngredienteReceitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngredienteReceitaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredienteReceitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
