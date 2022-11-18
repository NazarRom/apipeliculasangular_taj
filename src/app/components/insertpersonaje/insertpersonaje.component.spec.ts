import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertpersonajeComponent } from './insertpersonaje.component';

describe('InsertpersonajeComponent', () => {
  let component: InsertpersonajeComponent;
  let fixture: ComponentFixture<InsertpersonajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertpersonajeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertpersonajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
