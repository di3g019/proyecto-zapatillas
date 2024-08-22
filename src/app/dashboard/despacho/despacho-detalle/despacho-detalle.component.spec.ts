import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DespachoDetalleComponent } from './despacho-detalle.component';

describe('DespachoDetalleComponent', () => {
  let component: DespachoDetalleComponent;
  let fixture: ComponentFixture<DespachoDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DespachoDetalleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DespachoDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
