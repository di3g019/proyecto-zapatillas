import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColaboradorDetalleComponent } from './colaborador-detalle.component';

describe('ColaboradorDetalleComponent', () => {
  let component: ColaboradorDetalleComponent;
  let fixture: ComponentFixture<ColaboradorDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColaboradorDetalleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColaboradorDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
