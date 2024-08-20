import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoventaDetalleComponent } from './estadoventa-detalle.component';

describe('EstadoventaDetalleComponent', () => {
  let component: EstadoventaDetalleComponent;
  let fixture: ComponentFixture<EstadoventaDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstadoventaDetalleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstadoventaDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
