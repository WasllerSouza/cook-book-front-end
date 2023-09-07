import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JantaComponent } from './janta.component';

describe('JantaComponent', () => {
  let component: JantaComponent;
  let fixture: ComponentFixture<JantaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JantaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JantaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
