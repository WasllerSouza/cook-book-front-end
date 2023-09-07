import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManhaComponent } from './manha.component';

describe('ManhaComponent', () => {
  let component: ManhaComponent;
  let fixture: ComponentFixture<ManhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManhaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
