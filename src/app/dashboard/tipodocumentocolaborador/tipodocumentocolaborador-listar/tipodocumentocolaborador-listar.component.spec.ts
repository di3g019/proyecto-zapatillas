import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipodocumentocolaboradorListarComponent } from './tipodocumentocolaborador-listar.component';

describe('TipodocumentocolaboradorListarComponent', () => {
  let component: TipodocumentocolaboradorListarComponent;
  let fixture: ComponentFixture<TipodocumentocolaboradorListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TipodocumentocolaboradorListarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipodocumentocolaboradorListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
