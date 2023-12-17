import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreparoReceitaComponent } from './preparo-receita.component';

describe('PreparoReceitaComponent', () => {
  let component: PreparoReceitaComponent;
  let fixture: ComponentFixture<PreparoReceitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreparoReceitaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreparoReceitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
