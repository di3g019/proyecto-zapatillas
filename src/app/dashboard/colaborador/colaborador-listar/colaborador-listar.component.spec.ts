import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColaboradorListarComponent } from './colaborador-listar.component';

describe('ColaboradorListarComponent', () => {
  let component: ColaboradorListarComponent;
  let fixture: ComponentFixture<ColaboradorListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColaboradorListarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColaboradorListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
