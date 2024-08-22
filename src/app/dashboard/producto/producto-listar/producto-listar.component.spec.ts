import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoListarComponent } from './producto-listar.component';

describe('ProductoListarComponent', () => {
  let component: ProductoListarComponent;
  let fixture: ComponentFixture<ProductoListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductoListarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductoListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
