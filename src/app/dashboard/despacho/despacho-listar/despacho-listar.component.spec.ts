import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DespachoListarComponent } from './despacho-listar.component';

describe('DespachoListarComponent', () => {
  let component: DespachoListarComponent;
  let fixture: ComponentFixture<DespachoListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DespachoListarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DespachoListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
