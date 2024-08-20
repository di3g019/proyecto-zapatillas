import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetododepagoDetalleComponent } from './metododepago-detalle.component';

describe('MetododepagoDetalleComponent', () => {
  let component: MetododepagoDetalleComponent;
  let fixture: ComponentFixture<MetododepagoDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MetododepagoDetalleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetododepagoDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
