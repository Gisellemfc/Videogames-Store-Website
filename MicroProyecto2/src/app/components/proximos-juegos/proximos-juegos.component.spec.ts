import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProximosJuegosComponent } from './proximos-juegos.component';

describe('ProximosJuegosComponent', () => {
  let component: ProximosJuegosComponent;
  let fixture: ComponentFixture<ProximosJuegosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProximosJuegosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProximosJuegosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
