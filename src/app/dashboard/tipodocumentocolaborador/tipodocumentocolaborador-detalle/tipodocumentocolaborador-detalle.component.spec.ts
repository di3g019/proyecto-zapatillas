import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipodocumentocolaboradorDetalleComponent } from './tipodocumentocolaborador-detalle.component';

describe('TipodocumentocolaboradorDetalleComponent', () => {
  let component: TipodocumentocolaboradorDetalleComponent;
  let fixture: ComponentFixture<TipodocumentocolaboradorDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TipodocumentocolaboradorDetalleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipodocumentocolaboradorDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
