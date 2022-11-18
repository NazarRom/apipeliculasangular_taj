import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerosnajesComponent } from './perosnajes.component';

describe('PerosnajesComponent', () => {
  let component: PerosnajesComponent;
  let fixture: ComponentFixture<PerosnajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerosnajesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerosnajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
