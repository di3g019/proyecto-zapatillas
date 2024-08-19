import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoventaListarComponent } from './estadoventa-listar.component';

describe('EstadoventaListarComponent', () => {
  let component: EstadoventaListarComponent;
  let fixture: ComponentFixture<EstadoventaListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstadoventaListarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstadoventaListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
