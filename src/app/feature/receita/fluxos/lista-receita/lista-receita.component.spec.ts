import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarReceitaComponent } from './lista-receita.component';

describe('MostrarReceitaComponent', () => {
  let component: MostrarReceitaComponent;
  let fixture: ComponentFixture<MostrarReceitaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MostrarReceitaComponent]
    });
    fixture = TestBed.createComponent(MostrarReceitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
